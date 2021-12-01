const { setError,setSuccess,send } = require('../helpers/utils');
const Posts = require('../models/posts');

class PostController {

    async GetAllPost(_,res){
        try {

            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            
            const posts = await Posts.find();
            console.log("========================",posts)
            setSuccess(200,'Fetch Success',posts)
            return send(res)
        }catch(err){
            setError(500,err.message)
            return send(res)
        }
    }

    async CreatePost(req,res){
        try {

            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            const newPost = await new Posts(req.body).save();
            setSuccess(201,'Post Created Successfuly',newPost)
            return send(res)
        }catch(err){
            setError(500,err.message)
            return send(res)
        }
    }
}

module.exports = new PostController()
