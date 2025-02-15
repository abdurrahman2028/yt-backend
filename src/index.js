import dotenv from 'dotenv';
import connectDB from "./DB/Database.js";

dotenv.config({ path: "./env" });

connectDB()

// const app = express()
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
//     app.on("error", (error)=>{
//         console.log("error : ", error)
//     })
//     app.listen(process.env.PORT, ()=>{
//         console.log("Server is running on port : ", process.env.PORT)
//     })
//   } catch (error) {
//     console.log("error : ", error);
//   }
// })();
