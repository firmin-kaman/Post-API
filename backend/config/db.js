// Connection à la base de données
// Import mongoose
const mongoose = require("mongoose");

// Connect to MongoDB
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI); //Await c'est pour atteindre la connexion à la BD (avant d'afficher le "console.log").
/** **/ console.log("MongoDB connected"); // Ici on indique à "connect" où se trouve l'URI de la BD et on affiche dans la console le message en cas de succès !
    }catch (err) {
        console.log(err); //Ici on affiche dans la console l'erreur en cas d'échec !
        process.exit(); //Et on quitte le programme
    }
};

module.exports = connectDB; // On exporte la fonction connectDB pour l'utiliser n'importe où dans le projet (ex: server.js)
