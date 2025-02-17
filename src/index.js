import dotenv from 'dotenv';
import connectDB from "./DB/Database.js";

dotenv.config({ path: "./env" });

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port : ", process.env.PORT)
    })
})
.catch((error) => {
    console.log("error : ", error)
})
