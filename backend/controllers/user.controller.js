import User from "../models/user.model.js"

export const getCurrentUser = async (req, res) => {
    try {
        const userId = req.userId
        const User = await User.findById(userId)
        if(!User){
            return res.status(404).json({msg : "User not found"})
        }
        return res.status(200).json(User)
    } catch (error) {
        res.status(500).json({msg : `Get current user error : ${error}`})
        
    }

}