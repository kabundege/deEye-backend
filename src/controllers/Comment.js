const { errorResponse,successResponse } = require('../helpers/utils');
const { Comments,dummyComments } = require('../models/comments');

class CommentController {

    async GetAllComments(_,res){
        try {

            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            
            const comments = await Comments.find()
            return successResponse(res,200,'Fetch Success',comments.concat(dummyComments))
        }catch(err){
            return errorResponse(res,500,err.message)
        }
    }

    async CreateComment(req,res){        
        try {
            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            req.body.creator_name = req.userData.name;
            const newComment = await new Comments(req.body).save();
            return successResponse(res,201,'Comment Created Successfuly',newComment)

        }catch(err){
            return errorResponse(res,500,err.message)

        }
    }

}

module.exports =  new CommentController()
