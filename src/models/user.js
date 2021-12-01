import { Schema,model } from "mongoose"

const UsersPayload = {
    phoneNumber: { type: 'String', required: true },
    name: { type:"string", required:true },
    password: { type:"string",required:true }
}

const UsersSchema = new Schema(UsersPayload,{ timestamps:true })

const Users = model('Users',UsersSchema)

const dummyUsers = [
    {
        id:1,
        phoneNumber:'0784824295',
        name:'Christophe K. Kwizera'
    },{
        id:2,
        phoneNumber:'0781234567',
        name:'Eric Niyigena'
    },
]

module.exports = { Users,UsersSchema };
