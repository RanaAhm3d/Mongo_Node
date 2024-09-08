const Ads = require("./model");

exports.getAllAds = async (req, res, next) => {
    try {
        const ads = await Ads.find().populate({ path: "user_id", select: "name" });
        res.status(200).json({
            data: ads,
        });

    } catch (e) {
        next(e);
    };
};

exports.createNewAd = async (req, res, next) => {
    const { title, body, image } = req.body;
    try {
        const newAd = await Ads.create({
            title,
            body,
            Image: image,
            user_id: req.user_id,
        });
        res.status(200).json({
            message: "Created successfully",
            data: newAd,
        });

    } catch (e) {
        next(e);
    };
};

exports.getAdById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const ads = await Ads.findById(id);
        res.status(200).json({
            data: ads,
        });

    } catch (e) {
        next(e);
    };
};

exports.deleteAdById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const ads = await Ads.findById(id);
        if (req.user_id.toString() !== ads.user_id.toString()) {
            res.status(401).json({
                "message": "You are not allowed to perform this action"
            });
            return;

        };
        await Ads.findByIdAndDelete(id);
        res.status(200).json({
            "message": "Ad deleted successfully"
        });

    } catch (e) {
        next(e);
    };
};

exports.updateAdById = async (req, res, next) => {
    const { title, body, image } = req.body;
    const id = req.params.id;
    try {
        const ads = await Ads.findById(id);
        if (req.user_id.toString() !== ads.user_id.toString()) {
            res.status(401).json({
                "message": "You are not allowed to perform this action"
            });
            return;

        };
        const updateAd = await Ads.findByIdAndUpdate(id,
            { title, body, image },
            { new: true }

        );
        res.status(200).json({
            "message": "Ad updated successfully",
            data: updateAd
        });

    } catch (e) {
        next(e);
    };
};

