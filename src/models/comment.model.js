import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content : {
        type : String,
    },
    comment : {
        type : String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId
    },
    onModel : {
        type : String,
        required : true,
        enum : ["Tweets", "Comment"]
    },
    commentable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : "onModel"
    }
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;