const express = require("express");
const router = express.Router();
const { register , login , listAllUsers} = require('./controller');

router.get("/", listAllUsers);
router.post("/register", register);
router.post("/login", login);

module.exports = router;