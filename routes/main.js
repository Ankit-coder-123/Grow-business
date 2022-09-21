const express = require('express')
const { route } = require('express/lib/application')
const async= require("hbs/lib/async")
const Contact= require("../models/Contact")
const Detail = require("../models/Detail")
const slider = require('../models/slider')
const Service=require("../models/Service")
const { request, response } = require('express')

const routes = express.Router()

routes.get("/", async(req,res)=>{
     const details= await Detail.findOne({"_id":"63272c04fc879bd0a1f2ea47"})
    const slides= await slider.find()
    //  console.log(details)  
    // console.log(slides)     
    

    const services=await Service.find()

       res.render("index",{
        details:details,
        slides:slides,
        services:services
       })
})

// routes.get('/gallery', async(req,res)=>{
//     const details= await Detail.findOne({"_id":"6631b2a9a82369ae4e478d740"})
//     res.render("gallery",{
//         details:details
//     })
// })

routes.post("/process-contact-form", async(req,res)=>{
    console.log("form is submitted")
    console.log(req.body)

    //save the data to db
    try{

        const data=await Contact.create(req.body)
        console.log(data)
        res.redirect("/")

    }catch(e){
        console.log(e)
        res.redirect("/")
    }
})

module.exports=routes;