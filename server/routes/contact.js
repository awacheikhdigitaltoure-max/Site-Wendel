const express = require('express');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const router = express.Router();

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

// @route   POST /api/contact
// @desc    Envoyer un message de contact
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Nom, email et message sont requis'
      });
    }

    const contact = await Contact.create({ name, email, subject, message });

    // Notifier l'admin
    const transporter = createTransporter();
    if (transporter && process.env.ADMIN_EMAIL) {
      const adminMail = {
        from: `"Wëndelu Website" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `📩 Nouveau message de ${name} - Wëndelu`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Nouveau message via le site Wëndelu</h2>
            <p><strong>De :</strong> ${name} (${email})</p>
            <p><strong>Sujet :</strong> ${subject || 'Aucun'}</p>
            <hr/>
            <p>${message.replace(/\n/g, '<br/>')}</p>
          </div>
        `
      };
      try {
        await transporter.sendMail(adminMail);
      } catch (e) {
        console.warn('Email admin non envoyé :', e.message);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Message envoyé avec succès ! Nous vous répondrons sous 24h.',
      contactId: contact._id
    });
  } catch (error) {
    console.error('Erreur contact:', error);
    res.status(500).json({ success: false, message: 'Erreur serveur', error: error.message });
  }
});

const { protect, admin } = require('../middleware/auth');

// @route   GET /api/contact
// @desc    Récupérer tous les messages de contact
// @access  Private/Admin
router.get('/', protect, admin, async (req, res) => {
  try {
    const messages = await Contact.find({}).sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur serveur', error: error.message });
  }
});

module.exports = router;
