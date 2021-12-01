const { Schema,model } = require("mongoose")

const CommentsPayload = {
    story_id: { type:'number', required:true },
    creator_id: { type:'number', required:true },
    content: { type:"string", required:true },
}

const CommentsSchema = new Schema(CommentsPayload,{ timestamps:true })

const Comments = model('Comments',CommentsSchema)

const dummyComments = [
    {
        id:3,
        content:'Pariatur non aliquip reprehenderit duis dolore incididunt qui qui. Quis sit sit consequat duis ullamco laborum. Aute ex nulla minim nisi irure proident.',
        story_id:2,
        creator_id:1,
        creator:{
            id:1,
            phoneNumber:'0784824295',
            name:'Christophe K. Kwizera'
        },
        timestamp:Date.now(),
    },
    {
        id:2,
        content:'Pariatur non aliquip reprehenderit duis dolore incididunt qui qui. Quis sit sit consequat duis ullamco laborum. Aute ex nulla minim nisi irure proident.',
        story_id:2,
        creator_id:2,
        creator:{
            id:2,
            phoneNumber:'0781234567',
            name:'Eric Niyigena'
        },
        timestamp:1636054404863,
    },
    {
        id:1,
        content:'Pariatur non aliquip reprehenderit duis dolore incididunt qui qui. Quis sit sit consequat duis ullamco laborum. Aute ex nulla minim nisi irure proident.',
        story_id:2,
        creator_id:1,
        creator:{
            id:1,
            phoneNumber:'0784824295',
            name:'Christophe k. Kwizera'
        },
        timestamp:1636050474863,
    },
    {
        id:4,
        content:'Pariatur non aliquip reprehenderit duis dolore incididunt qui qui. Quis sit sit consequat duis ullamco laborum. Aute ex nulla minim nisi irure proident.',
        story_id:2,
        creator_id:1,
        creator:{
            id:1,
            phoneNumber:'0784824295',
            name:'Christophe k. Kwizera'
        },
        timestamp:1633054474863,
    },
]

module.exports = { Comments,dummyComments };
