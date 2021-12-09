const { Schema,model } = require("mongoose")

const PostsPayload = {
    type: { type:"string", required:true },
    name: { type:"string", required:true },
    age: { type:'number', required:false },
    image: { type:"string", required:true },
    status: { type:"string", required:true },
    gender: { type:"string", required:true },
    location: { type:"string", required:false },
    creator_id: { type:'string', required:true },
    phone_number: { type:"string", required:true },
    complexion: { type:"string", required:false },
    nationality: { type:"string", required:false },
}

const PostsSchema = new Schema(PostsPayload,{ timestamps:true })

const Posts = model('Posts',PostsSchema)

const dummyPosts = [
    {
        id: 1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0JBjn7SrY39W1IA4-UsZjtdWIFMNINnIew&usqp=CAU',
        name:'Allia Uwase',
        age:8,
        gender:'Female',
        description:'Cupidatat id magna dolore consectetur excepteur nisi eiusmod. Excepteur elit duis nulla ipsum ut enim laboris sunt adipisicing proident aliqua ullamco do aute. Ullamco voluptate velit tempor anim minim elit minim.',
        phone_number:'+250789123456',
        creator_id:5,
        status:'active',
        type:'lost',
        complexion:"Dark",
        location:"Kigali, Rwanda",
        nationality:"Rwandan"
    },{
        id: 2,
        image:'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBjaGlsZHxlbnwwfHwwfHw%3D&w=1000&q=80',
        name:'Boris Kalisa',
        age:15,
        gender:'Male',
        description:'Cupidatat id magna dolore consectetur excepteur nisi eiusmod. Excepteur elit duis nulla ipsum ut enim laboris sunt adipisicing proident aliqua ullamco do aute. Ullamco voluptate velit tempor anim minim elit minim.',
        phone_number:'+250789123456',
        creator_id:3,
        status:'dormant',
        type:'lost',
        complexion:"Dark",
        location:"Kigali, Rwanda",
        nationality:"Rwandan"
    },{
        id: 3,
        image:'https://i.pinimg.com/originals/31/50/05/315005b83169c65bfda81c7b2b25d18a.png',
        name:'Madi Previa',
        age:22,
        gender:'Male',
        description:'Cupidatat id magna dolore consectetur excepteur nisi eiusmod. Excepteur elit duis nulla ipsum ut enim laboris sunt adipisicing proident aliqua ullamco do aute. Ullamco voluptate velit tempor anim minim elit minim.',
        phone_number:'+250789123456',
        creator_id:4,
        status:'closed',
        type:'lost',
        complexion:"Dark",
        location:"Kigali, Rwanda",
        nationality:"Rwandan"
    },{
        id: 4,
        image:'https://www.andynickerson.com/wp-content/uploads/2014/11/black-and-white-childrens-photography-900x600.jpg',
        name:'Jamal Morry',
        age:12,
        gender:'Female',
        description:'Cupidatat id magna dolore consectetur excepteur nisi eiusmod. Excepteur elit duis nulla ipsum ut enim laboris sunt adipisicing proident aliqua ullamco do aute. Ullamco voluptate velit tempor anim minim elit minim.',
        phone_number:'+250789123456',
        creator_id:2,
        status:'active',
        type:'found',
        complexion:"Dark",
        location:"Kigali, Rwanda",
        nationality:"Rwandan"
    },{
        id: 5,
        image:'https://www.theresaolesenportraits.com/wp-content/uploads/2018/10/singapore-portrait-photographer-black-and-white.jpg',
        name:'Jogn Doe',
        age:20,
        gender:'Female',
        description:'Cupidatat id magna dolore consectetur excepteur nisi eiusmod. Excepteur elit duis nulla ipsum ut enim laboris sunt adipisicing proident aliqua ullamco do aute. Ullamco voluptate velit tempor anim minim elit minim.',
        phone_number:'+250789123456',
        creator_id:1,
        status:'closed',
        type:'found',
        complexion:"Dark",
        location:"Kigali, Rwanda",
        nationality:"Rwandan"
    }
]

module.exports =  { Posts,dummyPosts };
