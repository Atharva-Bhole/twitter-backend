import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel : {
        type: String,
        required : true,
        enum : ["Tweet", "Comment"]
    },
    user : {
        type : mongoose.Schema.Types.ObjectId
    },
    likeable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : "onModel"
    }
});

const Likes = mongoose.model("Likes", likeSchema);

export default Likes;