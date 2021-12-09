const Joi = require('@hapi/joi');

export const SignIn = Joi.object({
    password: Joi.string().required(),
    phone_number: Joi.string().required(),
});

export const SignUp = Joi.object({
    password: Joi.string().required(),
    phone_number: Joi.string().required(),
    name: Joi.string().required(),
});

export const Post = Joi.object({
    age: Joi.number(), 
    location: Joi.string(),
    complexion: Joi.string(),
    nationality: Joi.string(),  
    type: Joi.string().required(),
    name: Joi.string().required(),
    image: Joi.string().required(),
    gender: Joi.string().required(),
    phone_number: Joi.string().required(),
});

export const Comment = Joi.object({ 
    content: Joi.string().required(),
    story_id: Joi.number().required(), 
    creator_id: Joi.number().required(),
});
