//Requires
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');



//Vars
const app = express();
const port = process.env.PORT || 2000;
const db_url = process.env.DB_URL;
//MiddleWars
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Routes
require('./src/routes')(app);
app.all("*", (req, res, next) => {
    res.status(404).json({ message: "Error not found" });
});

app.use((err, req, res, next) => {
    res.status(400).json({ error: err.message });
});

//DB connection and server
mongoose.connect("mongodb://localhost:27017/blog_node").then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
});

