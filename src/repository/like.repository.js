import CrudRepository from "./crud.repository";
import Likes from "../models/like.model";
class LikeRepository extends CrudRepository{
    constructor(){
        super(Likes)
    }
}