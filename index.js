const mongoose=require('mongoose');

const app=require("./app");
const {MONGODB_URL}=require("./utils/config");
console.log('connecting to MangoDB...');
mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log('connected to mangodb');

    app.listen(3002, () => {
    console.log(`Server is running on http://localhost:3002`);
});
}).catch((error)=>{
    console.log('Error connecting to mangoDB',error);
});    



