const utils = require("../helpers/utils");
const users = require("../models/user");

const authorizationCheck = async (req, res, next) => {
    const phoneNumber  = req.headers.phonenumber;

    const user = users.find( one => one.phoneNumber === phoneNumber );

    if(!user){
        utils.setError(401, 'Invalid User-Request');
        return utils.send(res);
    }

    req.userData = user;
    next();
};

module.exports = authorizationCheck
