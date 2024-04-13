import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";


const authLogin = async(req, res) => {
    try {
        const {userName, password} = req.body;
        const user = await UserModel.findOne({userName});
        if(!user) {
            return res.status(400).json({error : "No user found"});
        }

        const isPassCorrect = await bcrypt.compare(password, user.password);
        if(!isPassCorrect) {
            return res.status(400).json({error : "Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        return res.status(201).json({
            id : user._id,
            fullName: user.fullName,
            userName : user.userName,
            profilePic : user.profilePic
        });

        

    } catch (error) {
        return res.status(500).json({ error: "Server Error" });
    }
    
}


const authLogout = (req, res) => {
    try {
        res.clearCookie("jwt");
        return res.status(200).json({message : "Logged out Successfully"});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


const authSignup = async(req, res) => {
    try {
        const {fullName, userName, password, gender, confirmPassword} = req.body;
        if(password != confirmPassword){
            return res.status(400).json({error : "Invalid password and confirmation password"});
        }
        const user  = await UserModel.findOne({userName});
        if(user){
            return res.status(400).json({error : "User Already exists"});
        }

        // Hash Password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new UserModel({
            fullName, userName, 
            password: hashedPassword,
            gender,
            profilePic : gender == "male" ? boyProfilePic : girlProfilePic
        });

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();
    
            return res.status(201).json({
                id : newUser._id,
                fullName: newUser.fullName,
                userName : newUser.userName,
                profilePic : newUser.profilePic
            });
        }else{
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
       return  res.status(500).json({error : error.message});
    }

}


export {authLogin, authLogout, authSignup};