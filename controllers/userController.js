const user = require('../models/user');

// import mongoose
const mongoose = require('mongoose');

const userController={
    getUser:async(request,response)=>{
    try{
         const users=await user.find({},{_id:0,email:0});
         response.status(200).json(users);
    } catch(error){
        response.status(500).send({message:error.message});
    }
    }
}
module.exports = userController;