import CrudRepository from "./crud.repository";
import Comment from "../models/comment.model";

class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }

    

}