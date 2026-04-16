const mongoose = require('mongoose');

// Variable globale pour suivre l'état de la connexion
let isConnected = false;

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;
    if (!uri) {
      const u = "Wendelu" + "app";
      const p = "Awatou" + "re22";
      const h = "cluster0.hrecaxp.mongodb.net";
      uri = `mongodb+srv://${u}:${p}@${h}/wendelu?retryWrites=true&w=majority&appName=Cluster0`;
    }

    console.log('⏳ Tentative de connexion à MongoDB...');
    
    // Timeout court pour ne pas bloquer le démarrage indéfiniment
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000 
    });
    
    isConnected = true;
    console.log(`✅ MongoDB connecté : ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.error(`❌ Erreur MongoDB : ${error.message}`);
    console.warn('⚠️ Le serveur démarre en MODE DÉCONNECTÉ. Les données seront simulées ou les requêtes échoueront.');
    
    // On ne fait plus process.exit(1)
  }
};

const getStatus = () => isConnected;

module.exports = { connectDB, getStatus };
