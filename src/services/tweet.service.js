import TweetRepository from "../repository/tweet.repository.js";
import HashTagRepository from "../repository/hashtag.repository.js";

class TweetService{
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashTagRepository = new HashTagRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#+[a-zA-Z0-9(_)]/g)
        .map((tag) => tag.substring(1).toLowerCase());
        const tweet = await this.tweetRepository.create(data);

        let alreadyPresentTags = await this.hashTagRepository.findByName(tags);
        let textPresentTags = alreadyPresentTags.map(tag => tags.next);
        let newTags = tags.filter(tag=> !textPresentTags.includes(tags));

        newTags = newTags.map(tag=>{
            return {
                text : tag,
                tweets : [tweet.id]
            }
        });

        await this.hashTagRepository.createBulk(newTags);
        alreadyPresentTags.forEach((tag)=>{
            tag.tweet.push(tweet.id);
            tag.save();
        });
        return tweet;
    }

    async getTweet(tweetId){
        const tweet = await this.tweetRepository.getTweet(tweetId);
        return tweet;
    }
}

export default TweetService;