const { setError,setSuccess,send } = require('../helpers/utils');
const { dummyUsers } = require('../models/user');

const users = dummyUsers;

class UserController {

    async GetUSer(req,res){
        const { phoneNumber } = req.body;
        const user = users.find( one => one.phoneNumber === phoneNumber )
    
        if(!user){
            setError(404,'User Not Found, Register ?')
        }else{
            setSuccess(200,'Fetch Success',user);
        }
    
        return send(res)
    }

    async Login(req,res){
        const { phoneNumber,password } = req.body;
        const user = users.find( one => one.phoneNumber === phoneNumber );
    
        if(!user){
            setError(400,'User Unkown, Register ?')
        }else{
            if(user.password !== password ){
                setError(400,'Password Unkown')
            }else{
                setSuccess(200,'Login Success',user)
            }
        }
    
        return send(res)
    }

    async SignUp(req,res){
        const { phoneNumber } = req.body;
        const user = users.find( one => one.phoneNumber === phoneNumber )
    
        if(user){
            setError(400,'Phone Number already Registered')
        }else{
            const payload = {
                ...req.body,
                id:users.length+1
            }
            users.push(payload);
            setSuccess(201,'Signup Success',payload);
        }
    
        return send(res)
    }
}

module.exports = new UserController()
