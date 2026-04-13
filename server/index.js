require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');

// Connexion à la base de données
connectDB();

const app = express();

// ─── Sécurité ───────────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:5173',
    'http://localhost:4173'
  ],
  credentials: true
}));

// Rate limiting (100 requêtes / 15min par IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Trop de requêtes, réessayez dans 15 minutes.' }
});
app.use('/api', limiter);

// ─── Parsing ─────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// ─── Routes ──────────────────────────────────────────────────
app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/contact', require('./routes/contact'));

// Route de santé
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: '🌍 API Wëndelu opérationnelle', timestamp: new Date() });
});

// Route 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} introuvable` });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error('Erreur globale :', err.stack);
  res.status(500).json({ success: false, message: 'Erreur serveur interne' });
});

// ─── Démarrage (uniquement en local) ─────────────────────────
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`\n🚀 Serveur Wëndelu démarré`);
    console.log(`   ➜ API     : http://localhost:${PORT}/api`);
    console.log(`   ➜ Santé  : http://localhost:${PORT}/api/health\n`);
  });
}

module.exports = app;
