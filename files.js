const fs=require('fs')

fs.unlink("hello.text",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        
        console.log('File deleted');
    
    }
});