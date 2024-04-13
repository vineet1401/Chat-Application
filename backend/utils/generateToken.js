import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.SECRET_KEY, {
        expiresIn : "1d"
    });
    res.cookie("jwt", token, {
        maxAge : 1 * 8 * 60 * 60 * 1000, //MilliSecond
        httpOnly : true, //prevent cross scripting attacks
        sameSite : "strict"
    });
}


export default generateTokenAndSetCookie;