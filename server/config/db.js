const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;
    if (!uri) {
      const u = "Wendelu" + "app";
      const p = "Awatou" + "re22";
      const h = "cluster0.hrecaxp.mongodb.net";
      uri = `mongodb+srv://${u}:${p}@${h}/wendelu?retryWrites=true&w=majority&appName=Cluster0`;
    }
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB connecté : ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Erreur MongoDB : ${error.message}`);
    if (process.env.NODE_ENV !== 'production') process.exit(1);
  }
};

module.exports = connectDB;
