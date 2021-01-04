const mongoose = require('mongoose');
 
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    rating: {type: Number, default: 0}
});
 
const Post = mongoose.model('Post', PostSchema);
 
module.exports = Post;