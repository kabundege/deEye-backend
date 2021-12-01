const { setError,setSuccess,send } = require('../helpers/utils');
const { Users } = require('../models/user');

class UserController {

    async GetUSer(req,res){
        const { phoneNumber } = req.body;
        
        await new Promise((resolve,reject)=>{
            Users.find({ phoneNumber })
            .then(data => {
                if(!data){
                    resolve(setError(404,'User Not Found, Register ?'))
                }else{
                    resolve(setSuccess(200,'Fetch Success',data));
                }  
            }).catch(er => reject(setError(500,er.message)))
        }) 
    
        return send(res)
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
                setError(404,'Phone Number Not Found')
                return send(res);
            }

            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            setSuccess(200,'LogIn Successfuly',exists)
            return send(res)
        }catch(err){
            setError(500,err.message)
            return send(res)
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
                setError(403,'PhoneNumber Already exist')
                return send(res);
            }

            /**
             * Creates a new Payment 
             * with the payment Schema
             */

            const newUser = await new Users(req.body).save();
            setSuccess(201,'Sign Up Successfuly',newUser)
            return send(res)
        }catch(err){
            setError(500,err.message)
            return send(res)
        }
    }
}

module.exports = new UserController()
