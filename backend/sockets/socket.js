import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors : {
        origin : [ 'https://wechat-fpps.onrender.com/' ],
        // origin : [ 'http://localhost:3000/' ],
        methods : [ 'GET', 'POST']
    }
});
const userSocketMap = {};

export const getRecieverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}


io.on('connection', (socket)=> {
    // console.log("user Connected", socket.id);
    
    const userId = socket.handshake.query.id;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUser", Object.keys(userSocketMap));
    
    socket.on("disconnect", ()=>{
        // console.log("user Disconnected", socket.id);
        delete userSocketMap[userId];
        
        io.emit("getOnlineUser", Object.keys(userSocketMap));

    });
});

export {app, io, server};