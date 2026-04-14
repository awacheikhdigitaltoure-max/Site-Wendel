const mongoose = require('mongoose');

const connectDB = async () => {
  // Lien direct vers la base de données (corrigé avec le bon utilisateur Atlas)
  const MONGO_URI = "mongodb+srv://awacheikhdigitaltoure_db_user:YFA4O3k8MdHa0JaT@cluster0.hrecaxp.mongodb.net/wendelu?retryWrites=true&w=majority&appName=Cluster0";

  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`✅ MongoDB connecté : ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Erreur MongoDB : ${error.message}`);
    if (process.env.NODE_ENV !== 'production') process.exit(1);
  }
};

module.exports = connectDB;
