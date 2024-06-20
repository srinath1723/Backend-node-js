const fs=require('fs')

fs.mkdir('codes',(error)=>{
    if(error){
        console.log('error createing directory');
    }
});