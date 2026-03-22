import UserModel from "../models/user.model.js";

export const getUser = async(req, res) => {
    try {
        const userId = req.userId
        const user = await UserModel.findById(userId)
        if(!user){
            return res.status(404).json({error: "User Not Found"})
        }
      return res.status(200).json(user)
    } catch (error) {
        console.error("Authentication Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}