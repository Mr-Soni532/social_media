const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config();
const mongoURI = process.env.mongoURI;
const connectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURI)
        console.log('Connected to Mongoose')
    } catch (error) {
        console.log(error, 'Something went wrong while connecting to mongoose')
    }
}
module.exports = connectToMongo;