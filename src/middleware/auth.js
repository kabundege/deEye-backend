const { errorResponse } = require("../helpers/utils");
const { Users } = require("../models/user");

const authorizationCheck = async (req, res, next) => {
    const phoneNumber  = req.headers.phonenumber;

    try{

        if(!phoneNumber){
            // return res.status(401).json({ status:401,message:'Un-Authenticated Request' })
            return errorResponse(res,401, 'Un-Authenticated Request');
        }
    
        const user = await Users.findOne({ phoneNumber })
    
        if(!user){
            // return res.status(401).json({ status:401,message:'Un-Authenticated User' })
            return errorResponse(res,401, 'Un-Authenticated User');
        }
    
        req.userData = user;
        next();
    }catch(er){
        return errorResponse(res,500,er.message)
    }
};

module.exports = authorizationCheck
