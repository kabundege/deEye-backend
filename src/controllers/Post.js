const { errorResponse,res,successResponse } = require('../helpers/utils');
const { Posts,dummyPosts } = require('../models/posts');

class PostController {

    async GetAllPost(_,res){
        try {

            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            
            const posts = await Posts.find();
            return successResponse(res,200,'Fetch Success',posts.concat(dummyPosts))
        }catch(err){
            return errorResponse(res,500,err.message)
        }
    }

    async CreatePost(req,res){
        try {

            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            const newPost = await new Posts(req.body).save();
            return successResponse(res,201,'Post Created Successfuly',newPost)
        }catch(err){
            return errorResponse(res,500,err.message)
        }
    }
}

module.exports = new PostController()
