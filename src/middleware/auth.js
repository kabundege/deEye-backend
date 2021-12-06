const { errorResponse } = require("../helpers/utils");
const { Users } = require("../models/user");

const authorizationCheck = async (req, res, next) => {
    const { phone_number }  = req.headers;

    try{

        if(!phone_number){
            // return res.status(401).json({ status:401,message:'Un-Authenticated Request' })
            return errorResponse(res,401, 'Un-Authenticated Request');
        }
    
        const user = await Users.findOne({ phone_number })
    
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
