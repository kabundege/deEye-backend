const { setError,send } = require("../helpers/utils");
const { Users } = require("../models/user");

const authorizationCheck = async (req, res, next) => {
    const phoneNumber  = req.headers.phonenumber;

    if(!phoneNumber){
        // return res.status(401).json({ status:401,message:'Un-Authenticated Request' })
        setError(401, 'Un-Authenticated Request');
        return send(res);
    }

    const user = await Users.findOne({ phoneNumber })

    if(!user){
        // return res.status(401).json({ status:401,message:'Un-Authenticated User' })
        setError(401, 'Un-Authenticated User');
        return send(res);
    }

    req.userData = user;
    next();
};

module.exports = authorizationCheck
