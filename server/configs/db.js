import { connect } from "http2";
import mongoose from "mongoose";

const connectDB= async (params) => {
    try {
        mongoose.connection.on('connected',()=>{
            console.log("Database Connected");
            
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`)
    } catch (error) {

        console.log(error.message);
        
        
    }
    
}

export default connectDB;