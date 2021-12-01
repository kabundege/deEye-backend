const express = require('express');
const { GetAllComments, CreateComment } = require('./controllers/Comment');
const { CreatePost, GetAllPost, UpdatePost } = require('./controllers/Post');
const { Login, SignUp, GetUSer } = require('./controllers/User');
const { setError,setSuccess,send } = require('./helpers/utils');
const authorizationCheck = require('./middleware/auth');

const router = express.Router();

/* User Routes */
router.post('/login',Login);

router.post('/signup',SignUp);

router.post('/getInfo',GetUSer);

/* Post Routes */
router.post('/posts',authorizationCheck,CreatePost)

router.get('/posts',authorizationCheck,GetAllPost)

router.patch('/posts',authorizationCheck,UpdatePost)

/* Comment Routes */
router.post('/comments',authorizationCheck,CreateComment)

router.get('/comments',authorizationCheck,GetAllComments)

module.exports = router;
