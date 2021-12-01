const { setError,setSuccess,send } = require('../helpers/utils');
const { dummyComments } = require('../models/comments');

const comments = dummyComments;

class CommentController {

    async GetAllComments(_,res){
        setSuccess(200,'Fetch Success',posts)
        return send(res)
    }

    async CreateComment(req,res){
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

module.exports = new CommentController()
