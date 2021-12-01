import { Comment, Post, SignIn, SignUp } from "../helpers/schemas";
const { setError,send } = require("../helpers/utils");


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
        util.setError(400, Error);
        return util.send(res);
      }
  
      const Error = error.details[0].message.replace('/', '').replace(/"/g, '');
      setError(400, Error);
      return send(res);
    }else{
      return ;
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

