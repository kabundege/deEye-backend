import { setError,setSuccess,send } from '../helpers/utils'
import { Comments } from '../models/comments';

class CommentController {

    async GetAllComments(_,res){
        const comments = await Comments.find()
        setSuccess(200,'Fetch Success',comments)
        return send(res)
    }

    async CreateComment(req,res){        
        try {
            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            const newComment = await new Comments(req.body).save();
            setSuccess(201,'Comment Created Successfuly',newComment)
            return send(res)
        }catch(err){
            setError(500,err.message)
            return send(res)
        }
    }

}

module.exports = new CommentController()
