const express = require("express");
const router = express.Router();
const { getAllPosts, createNewPost, getPostById, deletePostById, updatePostById } = require("./controller");
const { checkAuth } = require("../users/middleware");


router.get('/', getAllPosts);
router.get("/:id", getPostById);
router.post("/", checkAuth, createNewPost);
router.delete("/:id", [checkAuth] ,deletePostById);
router.patch("/:id", updatePostById);



module.exports = router;