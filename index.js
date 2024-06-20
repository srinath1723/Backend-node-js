// 1. import express module
const express= require('express');

//2. create express app
const app=express();
//4.cretae a route
app.get('/',(request,response)=>{
     response.send('hello world');
})

//3. run the server
app.listen(3002,()=>{
   console.log('server is rinning on http://localhost:3002');
});