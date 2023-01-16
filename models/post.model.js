const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    device: {
        type: String,
        require: true
    }, userId: String
})
const PostModel = mongoose.model('posts',postSchema);
module.exports = PostModel;