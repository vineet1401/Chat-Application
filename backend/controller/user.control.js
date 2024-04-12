import UserModel from "../models/user.model.js";

export const getUserForSideBar = async(req, res)=>{
    try {

        const loggedInUserId = req.user._id;
        const filteredUsers = await UserModel.find( { _id : {$ne : loggedInUserId} } ).select("-password");  // Find users except the current  

        return res.status(200).json(filteredUsers);
        
    } catch (error) {
        return res.status(500).json({error : error});
    }
}