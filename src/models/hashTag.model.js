import mongoose from "mongoose";

const hashTagSchema = new mongoose.Schema({
    text : {
        type : String,
        required : true,
        unique : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId
    },
    tweets :[ {
        type : mongoose.Schema.Types.ObjectId
        }
    ],
});

const HashTag = mongoose.model("Hashtag", hashTagSchema);

export default HashTag;