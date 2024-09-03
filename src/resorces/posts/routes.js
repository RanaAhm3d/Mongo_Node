const express = require("express");
const router = express.Router();
const {getAllPosts, createNewPost , getPostById, deletePostById , updatePostById} = require("./controller");


router.get('/', getAllPosts);
router.get("/:id" , getPostById);
router.post("/", createNewPost);
router.delete("/:id" , deletePostById);
router.patch("/:id" ,updatePostById );



module.exports = router ;