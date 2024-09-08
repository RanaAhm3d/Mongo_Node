const postRoutes = require("./resorces/posts/routes");
const usersRoutes = require("./resorces/users/routes");
const adsRoutes = require("./resorces/ads/routes");

module.exports = (app) => {
    app.use("/posts" , postRoutes);
    app.use("/users" , usersRoutes);
    app.use("/ads" , adsRoutes);
};
