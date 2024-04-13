import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import express from "express";
import path from "path";

import authRouter from "./routes/auth.routes.js";
import messageRouter  from "./routes/message.routes.js";
import userRouter  from "./routes/user.routes.js";

import connectToMongoDb from "./database/dbConnection.js";
import {app, server} from "./sockets/socket.js"

const __dirName = path.resolve();


dotenv.config();
connectToMongoDb();


app.use(express.json()); // to parse incoming json payload ( from req body)
app.use(cookieParser());



app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);


app.use(express.static(path.join(__dirName, "/frontend/dist")))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirName, "frontend", "dist", "index.html"));
})




server.listen(8080, ()=>{
    console.log("Server is running on port http://localhost:8080")
});