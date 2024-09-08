const jwt = require("jsonwebtoken");

exports.checkAuth = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1] || " ";
    if (!token) {
        res.status(401).json({ message: "Please log in" });
        return;
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded) {
        res.status(401).json({ message: "Please log in" });
        return;
    }
    req.user_id = decoded.user_id;
    next();
};