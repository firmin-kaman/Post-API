// Mise en place des librairies

const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const app = express(); // c'est l'oject qui va executer les fonctions de la librerie "express"
const port = 5000;

// Connexion à la base de données
connectDB();



// Middleware qui permet de traiter les données de la request "REQ" dans la méthode "post"
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*** NB!!! les middlewares sont appelées avant les routes! ***/

// Vu que j'ai un dossier pour mes routes, je renseigne au serveur comment y acceder.
// Recupération des routes (c'est comme une importation html/css...):
app.use("/post", require("./routes/post.routes"));




// Lancement du serveur sur le port 5000
app.listen(port, () => console.log("Le serveur a démarré sur le port " + port));
