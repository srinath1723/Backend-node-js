const mongoose=require('mongoose');

const app=require("./app");
const {MONGODB_URL}=require("./utils/config");
const {PORT}=require("./utils/config");
console.log('connecting to MangoDB...');

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log('connected to mangodb');

    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
}).catch((error)=>{
    console.log('Error connecting to mangoDB',error);
});    



