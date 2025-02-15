import mongoose from "mongoose";
import { DATABASE_NAME } from "../Contants.js";
 
const connectDB = async () => {
    try {
        const connectedInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
        console.log(`\nMongoDB Connected !! Database Host ${connectedInstance.connection.host}`)
    } catch (error) {
        console.log("error : ", error);
        process.exit(1)
    }
} 

export default connectDB;