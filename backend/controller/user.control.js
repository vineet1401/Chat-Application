import UserModel from "../models/user.model.js";

export const getUserForSideBar = async(req, res)=>{
    try {

        const loggedInUserId = req.query.id;
        const filteredUsers = await UserModel.find( { _id : {$ne : loggedInUserId} } ).select("-password");  // Find users except the current  

        console.log(filteredUsers);
        return res.status(200).json(filteredUsers);
        
    } catch (error) {
        console.log(`Error in getUserForSideBar ${error}`);
        return res.status(500).json({error : error});
    }
}