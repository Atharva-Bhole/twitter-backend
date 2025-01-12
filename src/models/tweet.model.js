import { ObjectId } from "bson";
import mongoose, { mongo } from "mongoose";

const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
        required  : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
    },
    like : {
        type : Number
    },
    comment: {
        type : String
    },
    noOfRetweets : {
        type : Number
    }
});

const Tweet = mongoose.model("Tweet", tweetSchema);


export default Tweet;