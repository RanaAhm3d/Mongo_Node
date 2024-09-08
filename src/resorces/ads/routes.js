const express = require("express");
const router = express.Router();
const { getAllAds, createNewAd, getAdById, deleteAdById, updateAdById } = require('./controller');
const { checkAuth } = require("../users/middleware");


router.get('/', getAllAds);
router.get("/:id", getAdById);
router.post("/", checkAuth, createNewAd);
router.delete("/:id", checkAuth ,deleteAdById);
router.patch("/:id", checkAuth ,updateAdById);


module.exports = router;