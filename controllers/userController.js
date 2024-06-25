const user = require('../models/user');

// import mongoose
const mongoose = require('mongoose');

const userController={
    getUser:async(request,response)=>{
    try{
         const users=await user.find({},{_id:0});
         response.status(200).json(users);
    } catch(error){
        response.status(500).send({message:error.message});
    }
    },
    register:async(request,response)=>{
        try{
             //get the user inputs from the request body
             const{name,email,password}=request.body;
             //check if the user alredy exits in the database with same email
             const users=await user.findOne({email});
             //if the users exits,return an error response
             if(users){
                return response.status(400).send({message:"users already exits"});
            }
            
             //create new user
             const newUser=new user({name,email,password});
             //save the user
            const savedUser= await newUser.save();
            response.status(201).send({message:"user created successfully",user:savedUser});
        } catch(error){
            response.status(500).send({message:error.message});
        }
        },

}
module.exports = userController;