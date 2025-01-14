import HashTag from "../models/hashTag.model.js"
import CrudRepository from "./crud.repository.js";
class HashTagRepository extends CrudRepository{
    constructor() {
        super(HashTag);
    }

    async getAllHashTags()
    {
        try{
            let hashTags = await HashTag.find();
            return hashTags;
        }catch(error)
        {
            console.log(`Error fetching Hash Tags ${error}`);
            throw error;
        }
    }

    async getHashTag(id)
    {
        try{
            let hashTag = await HashTag.find({id : id});
            return hashTag;
        }catch(error)
        {
            console.log(`Error fetching hash tag with id ${error}`);
            throw error;
        }
    }

    async deleteHashTag(id)
    {
        try{
            let hashTag = await HashTag.delete({ id : id});
            return hashTag;
        }catch(error){
            console.log(`Error deleting hash tag ${error}`);
            throw error;
        }
    }

    async createBulk(data)
    {
        try{
            const tags = await HashTag.insertMany(data);
            return tags;
        }catch(error){
            console.log(`Error creating Bulk Hash Tags ${error}`);
            throw error;
        }
    }

    async getHashTagByName(name){
        try{
            let hashTags = await HashTag.find({
                text : name
            });
            return hashTags;
        }catch(error){
            console.log(`Error finding hash tag by name ${error}`);
            throw error;
        }
    }
}


export default HashTagRepository;