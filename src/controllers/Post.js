const { setError,setSuccess,send } = require('../helpers/utils');
const { dummyPosts } = require('../models/posts');

const posts = dummyPosts

class PostController {

    async GetAllPost(_,res){
        setSuccess(200,'Fetch Success',posts)
        return send(res)
    }

    async CreatePost(req,res){
        const payload = {
            ...req.body,
            id:posts.length+1,
            creator_id:req.userData.id,
        }
        posts.push(payload);
        setSuccess(201,'Creating Post Success',payload)
        return send(res)
    }

    async UpdatePost(req,res){
        const payload = {
            ...req.body,
            id:posts.length+1,
            creator_id:req.userData.id,
        }
        posts.push(payload);
        setSuccess(201,'Creating Post Success',payload)
        return send(res)
    }
}

module.exports = new PostController()
