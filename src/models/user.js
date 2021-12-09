import { Schema,model } from "mongoose"

const UsersPayload = {
    "phone_number": { type: 'String', required: true },
    "name": { type:"string", required:true },
    "password": { type:"string",required:true }
}

const UsersSchema = new Schema(UsersPayload,{ timestamps:true })

const Users = model('Users',UsersSchema)

module.exports = { Users,UsersSchema };
