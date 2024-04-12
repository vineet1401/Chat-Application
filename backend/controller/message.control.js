import ConversationModel from "../models/conversation.model.js";
import MessageModel from "../models/message.model.js";


export const sendMessage = async( req, res) => {
    try{
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;

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

        await Promise.all([conversation.save(), newMessage.save()]);

        return res.status(200).json(newMessage);

    }catch(error){
        return res.status(500).json({error: error});
    }
}


export const getMessage = async(req, res) =>{
    try {
        const userToChatId = req.params.id;
        const senderId = req.user._id;
        // console.log(senderId + " , " +  userToChatId);

        const conversation = await ConversationModel.findOne({
            participant : {$all : [senderId, userToChatId]}
        }).populate("messages");

        const messages = conversation.messages;
        console.log(messages);

        console.log(messages.length)
        return res.status(200).send(messages);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

