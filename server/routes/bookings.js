const express = require('express');
const Booking = require('../models/Booking');
const { protect } = require('../middleware/auth');
const nodemailer = require('nodemailer');
const { getStatus } = require('../config/db');
const mockDB = require('../config/mockDB');

const router = express.Router();

// Créer le transporteur email (optionnel - si EMAIL_USER est configuré)
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email de confirmation de réservation
const sendBookingConfirmation = async (booking) => {
  const transporter = createTransporter();
  if (!transporter) return;

  const mailOptions = {
    from: `"Wëndelu" <${process.env.EMAIL_USER}>`,
    to: booking.guestEmail,
    subject: '✈️ Confirmation de votre demande - Wëndelu',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 40px; border-radius: 16px;">
        <h1 style="color: #d4a853; margin-bottom: 8px;">Wëndelu</h1>
        <p style="color: #aaa; margin-bottom: 32px;">Voyages d'exception au Sénégal</p>
        
        <h2 style="color: #fff; margin-bottom: 16px;">Merci, ${booking.guestName} !</h2>
        <p style="color: #ccc; line-height: 1.6;">
          Votre demande de réservation a bien été reçue. Un expert Wëndelu vous contactera dans les 24h pour finaliser votre voyage.
        </p>

        <div style="background: #1a1a1a; border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid #d4a853;">
          <h3 style="color: #d4a853; margin-bottom: 16px;">Détails de votre demande</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #aaa;">Destination</td><td style="color: #fff; font-weight: bold;">${booking.destination}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Date de départ</td><td style="color: #fff;">${new Date(booking.departureDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Voyageurs</td><td style="color: #fff;">${booking.travellers} personne(s)</td></tr>
            ${booking.message ? `<tr><td style="padding: 8px 0; color: #aaa; vertical-align: top;">Message</td><td style="color: #fff;">${booking.message}</td></tr>` : ''}
          </table>
        </div>

        <p style="color: #aaa; font-size: 14px; margin-top: 32px;">
          Référence : <strong style="color: #d4a853;">${booking._id}</strong>
        </p>
        <p style="color: #555; font-size: 12px; margin-top: 16px;">
          © 2024 Wëndelu — Voyages d'exception au cœur du Sénégal
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Email de confirmation envoyé à ${booking.guestEmail}`);
  } catch (err) {
    console.warn('⚠️ Email non envoyé (config email manquante ou erreur) :', err.message);
  }
};

// @route   POST /api/bookings
// @desc    Créer une réservation
// @access  Public (ou Private si connecté)
router.post('/', async (req, res) => {
  try {
    const { guestName, guestEmail, destination, departureDate, travellers, message } = req.body;

    if (!guestName || !guestEmail || !destination || !departureDate) {
      return res.status(400).json({
        success: false,
        message: 'Nom, email, destination et date de départ sont requis'
      });
    }

    // Associer l'utilisateur connecté si token fourni
    let userId = null;
    if (req.headers.authorization) {
      try {
        const jwt = require('jsonwebtoken');
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch (e) {
        // pas connecté, on continue sans userId
      }
    }

    // --- Mode Simulation ---
    if (!getStatus()) {
      const booking = mockDB.save('bookings', {
        user: userId,
        guestName,
        guestEmail,
        destination,
        departureDate,
        travellers: travellers || 1,
        message: message || '',
        status: 'pending'
      });
      await sendBookingConfirmation(booking);
      return res.status(201).json({
        success: true,
        message: 'Réservation enregistrée (Simulation) !',
        booking
      });
    }

    const booking = await Booking.create({
      user: userId,
      guestName,
      guestEmail,
      destination,
      departureDate,
      travellers: travellers || 1,
      message: message || ''
    });

    // Envoyer l'email de confirmation
    await sendBookingConfirmation(booking);

    res.status(201).json({
      success: true,
      message: 'Réservation enregistrée avec succès ! Vous recevrez une confirmation sous 24h.',
      booking: {
        id: booking._id,
        destination: booking.destination,
        departureDate: booking.departureDate,
        travellers: booking.travellers,
        status: booking.status,
        createdAt: booking.createdAt
      }
    });
  } catch (error) {
    console.error('Erreur booking:', error);
    res.status(500).json({ success: false, message: 'Erreur serveur', error: error.message });
  }
});

const { admin } = require('../middleware/auth');

// @route   GET /api/bookings
// @desc    Récupérer toutes les réservations
// @access  Private/Admin
router.get('/', protect, admin, async (req, res) => {
  try {
    if (!getStatus()) {
      const bookings = mockDB.get('bookings').sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return res.json({ success: true, count: bookings.length, bookings });
    }
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    res.json({ success: true, count: bookings.length, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur serveur', error: error.message });
  }
});

// @route   PATCH /api/bookings/:id
// @desc    Mettre à jour le statut d'une réservation
// @access  Private/Admin
router.patch('/:id', protect, admin, async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Réservation introuvable' });
    }

    res.json({ success: true, message: 'Statut mis à jour', booking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur serveur', error: error.message });
  }
});

module.exports = router;
