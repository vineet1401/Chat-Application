import connectToMongoDb from "./backend/database/dbConnection.js";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import express from "express";
import path from "path";

import authRouter from "./backend/routes/auth.routes.js";
import messageRouter  from "./backend/routes/message.routes.js";
import userRouter  from "./backend/routes/user.routes.js";
import {app, server} from "./backend/sockets/socket.js"

const __dirName = path.resolve();


dotenv.config();
connectToMongoDb();


app.use(express.json()); // to parse incoming json payload ( from req body)
app.use(cookieParser());
app.use(express.static(path.join(__dirName, "/frontend/dist")))



app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);




app.get("*", (req, res) => {
    res.sendFile(path.join(__dirName, "frontend", "dist", "index.html"));
})




server.listen(8080, ()=>{
    console.log("Server is running on port http://localhost:8080")
});