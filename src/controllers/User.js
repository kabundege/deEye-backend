const { errorResponse,successResponse } = require('../helpers/utils');
const { Users } = require('../models/user');

class UserController {

    async GetUSer(req,res){
        const { phone_number } = req.body;
        try{
        
            const user = await Users.findOne({ phone_number })
    
            if(user){
                return successResponse(res,200,'Fetch Success',user);
            }else{
                return errorResponse(res,404,'User Not Found, Register ?')
            }

        }catch(err){
            return errorResponse(res,500,err.message)
        }
    
    }

    async Login(req,res){
        const { phone_number }  = req.body;

        try {
            
            /**
             * Check if the Provided Phone_Number
             * is not already registered for
             */

            const exists = await Users.findOne({ phone_number })

            if(!exists){
                return errorResponse(res,404,'Phone Number Not Found')
            }

            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            return successResponse(res,200,'LogIn Successfuly',exists)
        }catch(err){
            return errorResponse(res,500,err.message)
        }
    }

    async SignUp(req,res){

        const { phone_number }  = req.body;

        try {
            
            /**
             * Check if the Provided Phone_Number
             * is not already registered for
             */

            const exists = await Users.findOne({ phone_number })

            if(!exists){
                return errorResponse(res,403,'Phone_Number Already exist')
            }

            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            const newUser = await new Users(req.body).save();
            return successResponse(res,201,'Sign Up Successfuly',newUser)
        }catch(err){
            return errorResponse(res,500,err.message)
        }
    }
}

module.exports = new UserController()
