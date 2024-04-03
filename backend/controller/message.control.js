import ConversationModel from "../models/conversation.model.js";
import MessageModel from "../models/message.model.js";


export const sendMessage = async( req, res) => {
    try{
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;
        console.log(message,  ",", receiverId, ",", senderId);

        let conversation = await ConversationModel.findOne({participant : {$all : [senderId , receiverId]}});
        if(!conversation){
            conversation = await ConversationModel.create({
                participant : [senderId, receiverId],
            })
        }

        const newMessage = new MessageModel({
            senderId, receiverId, message
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //Socket Io Functionality

        await Promise.all(conversation.save(), newMessage.save());

        return res.status(200).json(newMessage);

    }catch(error){
        console.log(error);
        return res.status(500).json({error: error});
    }
}


export const getMessage = async(req, res) =>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await ConversationModel.findOne({
            participant : {$all : [senderId, userToChatId]}
        }).populate("messages");

        
        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;


        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log(`Error in getMessage Controller ${error.message}`);
        return res.status(500).json({error: error.message});
    }
}

