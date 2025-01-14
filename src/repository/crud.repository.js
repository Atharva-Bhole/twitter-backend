
class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data)
    {
        try{
            let result = await this.model.create(data);
            return result;
        }catch(error)
        {
            console.log(`Error creating hash tag ${error}`);
            throw error;
        }
    }


    async get(id)
    {
        try{
            let result = await this.model.find({id : id});
            return result;
        }catch(error)
        {
            console.log(`Error fetching hash tag with id ${error}`);
            throw error;
        }
    }

    async delete(id)
    {
        try{
            let result = await this.model.delete({ id : id});
            return result;
        }catch(error){
            console.log(`Error deleting hash tag ${error}`);
            throw error;
        }
    }

    async getAll(){
        try{
            let result = await this.model.find({});
            return result;
        }catch(error){
            console.log(`Error fetching results ${error}`);
            throw error;
        }
    }

    async update(id, data){
        try{
            const result = await this.model.findByIdAndUpdate(id, data, {new : true});
            return result;
        }catch(error){
            console.log(`Error updating data ${error}`);
            throw error;
        }
    }

}


export default CrudRepository;