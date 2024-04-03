import express from "express";
import connectToMongoDb from "./backend/database/dbConnection.js";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";


import authRouter from "./backend/routes/auth.routes.js";
import messageRouter  from "./backend/routes/message.routes.js";
import userRouter  from "./backend/routes/user.routes.js";


const app = express();


dotenv.config();
if (!process.env.DB_STRING) {
    console.error("MongoDB URI not found in environment variables. Make sure it's defined in your .env file.");
    process.exit(1); // Exit the process if MongoDB URI is not found
}


app.use(express.json()); // to parse incoming json payload ( from req body)
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);




app.get("/", (req, res) => {
    console.log("home executed")
    res.send("Welcome");
})




app.listen(8080, ()=>{
    connectToMongoDb();
    console.log("Server is running on port http://localhost:8080")
});