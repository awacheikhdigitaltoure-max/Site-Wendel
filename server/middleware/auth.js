const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Non autorisé - Token manquant' });
  }

  try {
    const secret = process.env.JWT_SECRET || 'wendelu_super_secret_jwt_key_2024_secure';
    const decoded = jwt.verify(token, secret);
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Utilisateur introuvable' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Token invalide ou expiré' });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ success: false, message: "Accès refusé - Réservé aux administrateurs" });
  }
};

module.exports = { protect, admin };
