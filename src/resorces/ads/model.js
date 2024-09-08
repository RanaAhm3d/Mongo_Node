const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add title to your ad']
    },
    body: {
        type: String,
        required: [true, 'Please add body to your ad']
    },
    Image: {
        type: String,
        required: [true, 'Please add body to your ad']
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

}, { timestamps: true })

const Ads = mongoose.model("Ads", adsSchema);
module.exports = Ads;