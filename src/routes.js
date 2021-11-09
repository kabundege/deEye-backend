const express = require('express');
const utils = require('./helpers/utils');
const authorizationCheck = require('./middleware/auth');
const comments = require('./models/comments');
const posts = require('./models/posts');
const users = require('./models/user');

const router = express.Router();

/* User Routes */
router.post('/login',(req,res)=>{
    const { phoneNumber,password } = req.body;
    const user = users.find( one => one.phoneNumber === phoneNumber );

    if(!user){
        utils.setError(400,'User Unkown, Register ?')
    }else{
        if(user.password !== password ){
            utils.setError(400,'Password Unkown')
        }else{
            utils.setSuccess(200,'Login Success',user)
        }
    }

    return utils.send(res)
});

router.post('/signup',(req,res)=>{
    const { phoneNumber } = req.body;
    const user = users.find( one => one.phoneNumber === phoneNumber )

    if(user){
        utils.setError(400,'Phone Number already Registered')
    }else{
        const payload = {
            ...req.body,
            id:users.length+1
        }
        users.push(payload);
        utils.setSuccess(201,'Signup Success',payload);
    }

    return utils.send(res)
});

router.post('/getInfo',(req,res)=>{
    const { phoneNumber } = req.body;
    const user = users.find( one => one.phoneNumber === phoneNumber )

    if(!user){
        utils.setError(404,'User Not Found, Register ?')
    }else{
        utils.setSuccess(200,'Fetch Success',user);
    }

    return utils.send(res)
});

/* Post Routes */
router.post('/posts',authorizationCheck,(req,res)=>{
    const payload = {
        ...req.body,
        id:posts.length+1,
        creator_id:req.userData.id,
    }
    posts.push(payload);
    utils.setSuccess(201,'Creating Post Success',payload)
    return utils.send(res)
})

router.get('/posts',authorizationCheck,(req,res)=>{
    utils.setSuccess(200,'Fetch Success',posts)
    return utils.send(res)
})

/* Comment Routes */
router.post('/comments',authorizationCheck,(req,res)=>{

    const payload = {
        ...req.body,
        id:posts.length+1,
        creator_id:req.userData.id,
        creator:req.userData
    }
    comments.push(payload);
    utils.setSuccess(201,'Creating Post Success',payload)
    return utils.send(res)
})

router.get('/comments',authorizationCheck,(req,res)=>{
    utils.setSuccess(200,'Fetch Success',comments)
    return utils.send(res)
})

module.exports = router;
