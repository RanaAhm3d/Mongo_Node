const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ['true', 'Please enter your name'],
        select: false,
    },
    email: {
        type: String,
        required: ['true', 'Please enter your email'],
        unique: true,
        lowercase: true,
        validate: function (val) {
            return validator.isEmail(val);
        },

    },
    password: {
        type: String,
        required: ['true', 'Please enter your password'],
        select: false,
    },

}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;