import { Comment, Post, SignIn, SignUp } from "../helpers/schemas";
const { errorResponse } = require("../helpers/utils");


const handler = (req,res,schema) => {
    const { error } = schema.validate(req.body);
     
    if ( error ) {
      if (
        error.details[0].message
          .replace('/', '')
          .replace(/"/g, '')
          .includes('fails to match the required')
      ) {
        const Error = {
          error: 'Incorrect use of special characters',
          tip: `Please avoid characters that looks like = or /`,
        };
        return errorResponse(res,400, Error);
      }
  
      const Error = error.details[0].message.replace('/', '').replace(/"/g, '');
      return errorResponse(res,400, Error);
    }else{
      return 1;
    }
         
}

export default class Validators {
    static async SignUpValidation(req, res, next) { 
      const result  = handler(req,res,SignUp)
        
      result === 1 ? next() : null
    }

    static async SignInValidation(req, res, next) { 
      const result  = handler(req,res,SignIn)
        
      result === 1 ? next() : null
    }

    static async PostValidation(req, res, next) { 
      const result  = handler(req,res,Post)
        
      result === 1 ? next() : null
    }

    static async CommentValidation(req, res, next) { 
      const result  = handler(req,res,Comment)
        
      result === 1 ? next() : null
    }
}

