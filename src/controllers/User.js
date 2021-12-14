const { errorResponse,successResponse } = require('../helpers/utils');
const { Users } = require('../models/user');
const { vonage } = require('../config')

class UserController {

    async SendSms(req,res){
        const { from,to } = req.body;

        const user = await Users.findOne({ phone_number:from })

        const text = ` ${user.name} has some helpful info about your case, callBack ${user.phone_number}`

        await new Promise((resolve,reject)=>{
            vonage.message.sendSms(from,to, text, (err, responseData) => {
                if (err) {
                    reject(errorResponse(res,500,`Message failed with error: ${err.messages}`))
                } else {
                    if(responseData.messages[0]['status'] === "0") {
                        resolve(successResponse(res,200,"Message sent successfully.",{}))
                    } else {
                        reject(errorResponse(res,500,`Message failed with error: ${responseData.messages[0]['error-text']}`))
                    }
                }
            })
        })
        return res.end();
    }

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

            if(exists){
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
