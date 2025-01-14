import Tweet from "../models/tweet.model.js";
import CrudRepository from "./crud.repository.js";
class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }

    async getAllTweets()
    {
        try{
            let tweets = await Tweet.find();
            return tweets;
        }catch(error)
        {
            console.log(`Error fetching tweets ${error}`);
            throw error;
        }
    }

    async getTweet(id){
        try{
            let tweet = await Tweet.findById(id);
            return tweet;
        }catch(error){
            console.log(`Error fetching tweet ${error}`);
            throw error;
        }
    }

    async deleteTweet(id){
        try{
            let tweet = await Tweet.deleteOne({
                id : id,
            });
            return tweet;
        }catch(error){
            console.log(`Error deleting a tweet ${error}`);
            throw error;
        }
    }
}

export default TweetRepository;