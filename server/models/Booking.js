const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // permet les réservations sans compte
  },
  guestName: {
    type: String,
    required: [true, 'Le nom est requis'],
    trim: true
  },
  guestEmail: {
    type: String,
    required: [true, "L'email est requis"],
    lowercase: true
  },
  destination: {
    type: String,
    required: [true, 'La destination est requise']
  },
  departureDate: {
    type: Date,
    required: [true, 'La date de départ est requise']
  },
  travellers: {
    type: Number,
    required: true,
    min: [1, 'Au moins 1 voyageur requis'],
    default: 1
  },
  message: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', BookingSchema);
