import { errorResponse,res,successResponse,send } from '../helpers/utils'
import { Comments } from '../models/comments';

class CommentController {

    async GetAllComments(_,res){
        const comments = await Comments.find()
        return successResponse(res,200,'Fetch Success',comments)
    }

    async CreateComment(req,res){        
        try {
            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            const newComment = await new Comments(req.body).save();
            return successResponse(res,201,'Comment Created Successfuly',newComment)

        }catch(err){
            return errorResponse(res,500,err.message)

        }
    }

}

module.exports = new CommentController()
