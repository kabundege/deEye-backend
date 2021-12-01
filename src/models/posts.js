import { Schema,model } from "mongoose"

const PostsPayload = {
    type: { type:"string", required:true },
    name: { type:"string", required:true },
    age: { type:'number', required:false },
    image: { type:"string", required:true },
    status: { type:"string", required:true },
    gender: { type:"string", required:true },
    location: { type:"string", required:false },
    creator_id: { type:'number', required:true },
    phoneNumber: { type:"string", required:true },
    complexion: { type:"string", required:false },
    nationality: { type:"string", required:false },
}

const PostsSchema = new Schema(PostsPayload,{ timestamps:true })

const Posts = model('Posts',PostsSchema)

const dummyPosts = [
    {
        id: 1,
        image:'https://picsum.photos/200/300',
        name:'Jogn Doe',
        age:20,
        gender:'Female',
        description:'Cupidatat id magna dolore consectetur excepteur nisi eiusmod. Excepteur elit duis nulla ipsum ut enim laboris sunt adipisicing proident aliqua ullamco do aute. Ullamco voluptate velit tempor anim minim elit minim.',
        phoneNumber:'+250789123456',
        creator_id:5,
        status:'active',
        type:'lost',
        complexion:"Dark",
        location:"Kigali, Rwanda",
        nationality:"Rwandan"
    },{
        id: 2,
        image:'https://picsum.photos/200/300',
        name:'Jogn Doe',
        age:15,
        gender:'Male',
        description:'Cupidatat id magna dolore consectetur excepteur nisi eiusmod. Excepteur elit duis nulla ipsum ut enim laboris sunt adipisicing proident aliqua ullamco do aute. Ullamco voluptate velit tempor anim minim elit minim.',
        phoneNumber:'+250789123456',
        creator_id:3,
        status:'dormant',
        type:'lost',
        complexion:"Dark",
        location:"Kigali, Rwanda",
        nationality:"Rwandan"
    },{
        id: 3,
        image:'https://picsum.photos/200/300',
        name:'Jogn Doe',
        age:22,
        gender:'Male',
        description:'Cupidatat id magna dolore consectetur excepteur nisi eiusmod. Excepteur elit duis nulla ipsum ut enim laboris sunt adipisicing proident aliqua ullamco do aute. Ullamco voluptate velit tempor anim minim elit minim.',
        phoneNumber:'+250789123456',
        creator_id:4,
        status:'closed',
        type:'lost',
        complexion:"Dark",
        location:"Kigali, Rwanda",
        nationality:"Rwandan"
    },{
        id: 4,
        image:'https://picsum.photos/200/300',
        name:'Jogn Doe',
        age:12,
        gender:'Female',
        description:'Cupidatat id magna dolore consectetur excepteur nisi eiusmod. Excepteur elit duis nulla ipsum ut enim laboris sunt adipisicing proident aliqua ullamco do aute. Ullamco voluptate velit tempor anim minim elit minim.',
        phoneNumber:'+250789123456',
        creator_id:2,
        status:'active',
        type:'found',
        complexion:"Dark",
        location:"Kigali, Rwanda",
        nationality:"Rwandan"
    },{
        id: 5,
        image:'https://picsum.photos/200/300',
        name:'Jogn Doe',
        age:20,
        gender:'Female',
        description:'Cupidatat id magna dolore consectetur excepteur nisi eiusmod. Excepteur elit duis nulla ipsum ut enim laboris sunt adipisicing proident aliqua ullamco do aute. Ullamco voluptate velit tempor anim minim elit minim.',
        phoneNumber:'+250789123456',
        creator_id:1,
        status:'closed',
        type:'found',
        complexion:"Dark",
        location:"Kigali, Rwanda",
        nationality:"Rwandan"
    },
]

export default Posts;
