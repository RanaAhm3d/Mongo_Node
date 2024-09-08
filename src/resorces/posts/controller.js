const Post = require('./model');

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().populate({ path: "user_id", select: "name" });
        res.status(200).json({
            data: posts,
        });

    } catch (e) {
        next(e);
    };
};

exports.createNewPost = async (req, res, next) => {
    const { title, body, tags } = req.body;
    try {
        const newPost = await Post.create({
            title,
            body,
            tags,
            user_id: req.user_id,
        });
        res.status(200).json({
            message: "Created successfully",
            data: newPost,
        });

    } catch (e) {
        next(e);
    }; 
};

exports.getPostById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        res.status(200).json({
            data: post,
        });

    } catch (e) {
        next(e);
    };
};

exports.deletePostById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        if (req.user_id.toString() !== post.user_id.toString()) {
            res.status(401).json({
                "message": "Can't do this action"
            });
            return;

        };
        await Post.findByIdAndDelete(id);
        res.status(200).json({
            "message": "Post deleted successfully"
        });

    } catch (e) {
        next(e);
    };
};

exports.updatePostById = async (req, res, next) => {
    const { title, body, tags } = req.body;
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        if (req.user_id.toString() !== post.user_id.toString()) {
            res.status(401).json({
                "message": "Can't do this action"
            });
            return;

        };
        const updatePost = await Post.findByIdAndUpdate(id,
            { title, body, tags },
            { new: true }

        );
        res.status(200).json({
            "message": "Post updated successfully",
            data: updatePost
        });

    } catch (e) {
        next(e);
    };
};

