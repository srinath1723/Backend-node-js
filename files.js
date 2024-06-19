const fs=require('fs')

const message="\nhello,backend!";

fs.writeFile('hello.text',message,(error)=>{
    if(error){
        console.error('Error writing to file');
    }
    else{
        console.log('File written successfully');
    }
})