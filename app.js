const express = require("express");
const hbs=require("hbs")
const app = express();
const mongoose=require("mongoose")
const bodyParser=require('body-parser')
const routes = require('./routes/main')
const detail=require("./models/Detail");
const Slider=require("./models/slider");
const Service=require("./models/Service")
// /static/css/style.css
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)

//template engine


app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//db connection
mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db connected")


// Service.create([
//     {
//         icon:'fa-brands fa-accusoft',
//         title:'Provide Best Courses',
//         description:'We provide courses that help our student in learning and in placement',
//         linkText:'',
//         link:'Check'
//     },
//     {
//         icon:'fa-solid fa-plane',
//         title:'Learn Courses',
//         description:'We provide courses that help our student in learning and in placement',
//         linkText:'',
//         link:'Learn'
//     },
//     {
//         icon:'fa-solid fa-plane',
//         title:'Learn Courses',
//         description:'We provide courses that help our student in learning and in placement',
//         linkText:'',
//         link:'Learn'
//     },
// ])

// Slider.create([
//     {
//         title:'Learn Java in very easy manner',
//         subTitle:'Java in one the most popular programming language.',
//         imageUrl:"static/images/pic.jpg"
//     },
//     {
//         title:'What is Django in Paython',
//         subTitle:'Django is most famous web framework of paython programming',
//         imageUrl:"static/images/pic2.jpg"
//     },
//     {
//         title:'What about node js?',
//         subTitle:'Node js is runtime envirnment to excute javascript  outsode browser',
//         imageUrl:"static/images/pic3.jpg"
//     }
// ])

    // detail.create({
    //     brandName:"Info Technical Solution",
    //     brandIconUrl:"/static/images/th2.jpg",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         },
    //     ]
    // })
});

app.listen(process.env.PORT | 4041, () => {
     console.log("server started");
});