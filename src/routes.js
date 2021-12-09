const express = require('express');
const { GetAllComments,CreateComment }= require('./controllers/Comment');
const { CreatePost, GetAllPost } = require('./controllers/Post');
const { Login, SignUp, GetUSer, SendSms } = require('./controllers/User');
const upload = require('./helpers/multer');
const authorizationCheck = require('./middleware/auth');
const { default: Validators } = require('./middleware/validation');

const { SignInValidation,SignUpValidation,CommentValidation,PostValidation } = Validators

const router = express.Router();

/* User Routes */
router.post('/login',SignInValidation,Login);

router.post('/signup',SignUpValidation,SignUp);

router.post('/getInfo',GetUSer);

/* Post Routes */
router.post('/posts',
    authorizationCheck,
    upload.single('image'),
    PostValidation,
    CreatePost
    )

router.get('/posts',authorizationCheck,GetAllPost)

/* Comment Routes */
router.post('/comments',authorizationCheck,CommentValidation,CreateComment)

router.get('/comments',authorizationCheck,GetAllComments)

/** SMS Route */
router.post('/sms',authorizationCheck,SendSms)

module.exports = router;
