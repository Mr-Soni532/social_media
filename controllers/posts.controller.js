const PostModel = require("../models/post.model")

exports.fetch = async (req, res) => {
    
    try {
        const data = await PostModel.find({ userId: req.userID})
        res.send(data);
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

exports.add = async (req, res) => {
    const { title, body, device } = req.body;
    try {
        const newPost = new PostModel({ title, body, device, userId: req.userID });
        await newPost.save();
        res.send('Post has been created successfully.')
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

exports.update = async (req, res) => {
    let id = req.params.id;
    try {
        const data = await PostModel.findByIdAndUpdate(id, req.body)
        res.send('note has been updated.')
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

exports.delete = async (req, res) => {
    let id = req.params.id;
    try {
        const data = await PostModel.findByIdAndDelete(id)
        res.send('note has been deleted.')
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}
