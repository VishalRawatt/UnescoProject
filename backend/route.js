const express = require('express')
const Schema = require('./schema')
const route = express.Router();

route.use(express.json())
route.get('/',(req,res)=>{
    res.send("Express file in route is running")
})

route.get('/getData',async(req,res)=>{
    const allData = await Schema.find();
    res.json(allData)
    console.log(allData)
})

route.post('/create',async(req,res)=>{
    const {photo, caption, hashtag} = req.body
    const postData = new Schema({photo,caption,hashtag});
    await postData.save();
    res.status(201).json(postData);
    console.log(postData)
})

route.get("/view/:id",async(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const singleUser = await Schema.findById({_id:id});
    console.log(singleUser);
    res.status(201).json(singleUser);
});

module.exports = route