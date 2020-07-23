const mongoose = require('mongoose');
const { post } = require('../routes/api/posts');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text:{
        type: String,
        required:true
    },
    name: {
        type:String
    },
    avatar: {
        type: String
    },
    likes: [
        {
            user:{
                type:Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref: 'users'
            },
            text:{
                type:String,
                required:true
            },
            name: {
                type:String
            },
            avatar: {
                type: String
            },
            date:{
                type: String,
                default: Date.now()
            }
        }
    ],
    date:{
        type: String,
        default: Date.now()
    }
});

module.exports = Post = mongoose.model('post',PostSchema);