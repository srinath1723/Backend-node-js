require('dotenv').config();

const MONGODB_URL=process.env.MONGODB_URL;
const PORT=process.env.PORT;
const SECURE_KEY=process.env.SECURE_KEY;
module.exports={
    MONGODB_URL,
    PORT,
    SECURE_KEY
}