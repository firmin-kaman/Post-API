// Mise en place d'express
const express = require("express");
const {setPosts, getPosts, editPost, deletePost, likePost, dislikePost, } = require("../controllers/post.controller");
const router = express.Router();


/******** CRUD START ********/
// Récupérer des données (GET)
/**router.get("/", (req, res) => {
  res.json({ message: "Voici les données" });
});**/
router.get("/", getPosts);

// insertion/envoi des données (POST)
/**router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body.message });
});**/
router.post("/", setPosts);


// Mise à jours des données (PUT)
/**router.put("/:id", (req, res) => {
  console.log(req.body);
  res.json({ messageId: req.params.id });
});**/
router.put("/:id", editPost);

// Suppression des données (DELETE)
/**router.delete("/:id", (req, res) => {
  console.log(req.body);
  res.json({ message: "Post supprimé id : " + req.params.id });
});**/
router.delete("/:id", deletePost);

/******** CRUD END ********/


/******** LIKE POST START ********/

// Liker un post
/**router.patch("/like-post/:id", (req, res) => {
  console.log(req.body);
  res.json({ message: "Post liké : id : " + req.params.id });
});**/
router.patch("/like-post/:id", likePost);

// Dis-liker un post
/**router.patch("/dislike-post/:id", (req, res) => {
  console.log(req.body);
  res.json({ message: "Post disliké : id : " + req.params.id });
});**/
router.patch("/dislike-post/:id", dislikePost);
/******** LIKE POST END ********/


// Exportation des routes
module.exports = router;
