import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model.js';

const protectRoute = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) return res.status(401).json({error : "Unauthorized User Access"});
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded) return res.status(401).json({error : "Invalid Token"});

        const user = await UserModel.findOne({_id : decoded.userId});
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error : "Unauthorised" });
    }
}

export default protectRoute;