// Creation du Controller du modèle post
//
const PostModel = require('../models/post.model');


/** Get postController **/
module.exports.getPosts = async (req,res) =>{
    const posts = await PostModel.find();
    res.status(200).json(posts);
}


/** Set postController **/
module.exports.setPosts = async (req,res) =>{

    // Mise en place d'un petit système de sécurité.
    if(!req.body.message){
        res.status(400).json({message: "Merci d'ajouter un message"})
    }
    // Envoi du model vers la BD
    const post = await PostModel.create({
        message: req.body.message,
        author: req.body.author
    })
    res.status(200).json(post)
};

/** Put/Edit postController **/
module.exports.editPost = async (req,res) =>{
    const post = await PostModel.findById(req.params.id);
    if(!post) {
        res.status(400).json({message: "Le post n'existe pas"});
    }

    const updatedPost = await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedPost);
};

/** Delete postController **/
module.exports.deletePost = async (req,res) =>{
    const post = await PostModel.findById(req.params.id); // récupération de l'id du post à supprimer.
    // Si le post n'existe pas, renvoie une erreur.
    if(!post) {
        res.status(400).json({message: "Le post n'existe pas"});
    }

    //Suppression du post (méthode 1)
    /** Ca Fonctionne !!! **/
    await PostModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Le post a été supprimé"});

    //Suppression du post (méthode 2)
    /** Ca Fonctionne TUTO !!! **/
    /*await post.deleteOne();
    res.status(200).json("Le post a été supprimé " + req.params.id);*/
};

/** Like postController **/
module.exports.likePost = async (req,res) =>{
    //Logique 1 TUTO !!!
    try {
        // Envoi vers la BD
        await PostModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { likers: req.body.userId }},
            { new: true }
        ).then((data) => res.status(200).send(data)); // Ici la donnée envoyé dans la BD est récupérée et affiché dans le testeur d'API.
    }catch (err) {
        res.status(400).json({message: "Erreur lors de l'ajout du like " + err});
    }

    // Logique 2
/*  const post = await PostModel.findById(req.params.id);
    if(!post) {
        res.status(400).json({message: "Le post n'existe pas"});
    }

    const updatedPost = await PostModel.findByIdAndUpdate(
        post,
        {
            $inc: {likes: 1}
        },
        {new: true}
    );
    res.status(200).json(updatedPost); */
};

/** Dislike postController **/
module.exports.dislikePost = async (req,res) => {
    //Logique 1 TUTO!!!
    try {
        // Envoi vers la BD
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$pull: {likers: req.body.userId}},
            {new: true}
        ).then((data) => res.status(200).send(data)); // Ici la donnée retiré dans la BD est affiché dans le testeur d'API.
    } catch (err) {
        res.status(400).json({message: "Erreur lors de l'ajout du like " + err});
    }
};

    // Logique 2