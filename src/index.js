import dotenv from 'dotenv';
import connectDB from "./DB/Database.js";
import app from './App.js';

dotenv.config({ path: "./env" });

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("error : ", error)
    })
    app.listen(process.env.PORT, () => {
        console.log("⌀ Server is running on port : ", process.env.PORT)
    })
})
.catch((error) => {
    console.log("error : ", error)
})
