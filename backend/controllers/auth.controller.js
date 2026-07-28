import gentoken from "../config/token.js";
import User from "../models/user.model.js";

export const googleauth = async (req, res) => {
    try {
        const {name, email} = req.body
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({name, email})
        }

        let token = gentoken(user._id)
        console.log('Generated token:', token);
        res.cookie('token', token, {
            httpOnly: true,
            secure : true,
            sameSite : 'none',
            maxAge: 7*24*60*60*1000
        })
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg : `Google auth error : ${error}`})
        
    }
}

export const logout = async (req, res) => {
    try {
        await res.clearCookie("token")
        return res.status(200).json({msg : "Logout successful"})
    } catch (error) {
        return res.status(500).json({msg : `Logout error : ${error}`})
    }
}