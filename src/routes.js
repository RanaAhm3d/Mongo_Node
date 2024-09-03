const postRoutes = require("./resorces/posts/routes");

module.exports = (app) => {
    app.use("/posts" , postRoutes);
};
