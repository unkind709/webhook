var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Post', PostSchema);

var user = new User();
user.save();

var post = new PostSchema();
post.author = user;
post.save();