const { errorResponse,successResponse } = require('../helpers/utils');
const { Users } = require('../models/user');

class UserController {

    async GetUSer(req,res){
        const { phoneNumber } = req.body;
        try{
        
            const user = await Users.find({ phoneNumber })
    
            if(user){
                return successResponse(res,200,'Fetch Success',data);
            }else{
                return errorResponse(res,404,'User Not Found, Register ?')
            }

        }catch(er){
            return errorResponse(res,500,err.message)
        }
    
    }

    async Login(req,res){
        const { phoneNumber }  = req.body;

        try {
            
            /**
             * Check if the Provided PhoneNumber
             * is not already registered for
             */

            const exists = await Users.find({ phoneNumber })

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

        const { phoneNumber }  = req.body;

        try {
            
            /**
             * Check if the Provided PhoneNumber
             * is not already registered for
             */

            const exists = await Users.find({ phoneNumber })

            if(exists){
                return errorResponse(res,403,'PhoneNumber Already exist')
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
