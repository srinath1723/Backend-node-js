const express = require('express');
const mongoose= require('mongoose');
const user=require("./models/user");
const app = express();
app.use(express.json());

app.get('/users',async(request,response)=>{
try{
     const users=await user.find({},{_id:0,email:0});
     response.status(200).json(users);
} catch(error){
    response.status(500).send({message:error.message});
}
})
module.exports=app;