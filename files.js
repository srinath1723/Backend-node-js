const fs=require('fs')

fs.readFile("hello.text",'utf-8',(err,data)=>{
    if(err){
        console.log('error reading file',err);
    }
    else{
        data.split("\n").forEach(line=>{
        console.log(line.split(':')[1]);
    })
    }
});