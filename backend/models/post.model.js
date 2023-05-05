//  Configuration du modèle de base de données (Structure de la DB)

// Importation de mongoose pour lier le schéma à la base de données sur mongoDB
const mongoose = require('mongoose');

/** Création de la structure de la base de données START **/
const postSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        likers: {
            type: [String],
        },
    },
    {
        timestamps: true,
    }
);
/** Création de la structure de la base de données END **/

//module.exports = mongoose.model('post', postSchema)
Post = mongoose.model('post', postSchema);// Ma méthode :J'utilise un objet post pour lier le schéma à la base de données sur mongoose
                                          // Ma méthode :J'utilise un objet post pour lier le schéma à la base de données sur mongoose
module.exports = Post;                    // Ma méthode :J'utilise un objet post pour lier le schéma à la base de données sur mongoose