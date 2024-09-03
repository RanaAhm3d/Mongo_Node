const Post = require('./model');

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
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
            tags
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

