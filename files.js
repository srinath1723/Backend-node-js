const fs=require('fs')

fs.mkdir('storage-files',(error)=>{
    if(error){
        console.log('error createing directory');
    }
});