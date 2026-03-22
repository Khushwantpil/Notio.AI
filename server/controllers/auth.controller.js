import UserModel from "../models/user.model.js";
import { getToken } from "../utils/token.js";

export const googleAuth = async(req, res) => {
    try {
        const { name, email } = req.body;
        let user = await UserModel.findOne({ email });
        if (!user) {
            user = await UserModel.create({ name, email });
        }
        let token = await getToken(user._id);
        res.cookie("token", token, { httpOnly: true, 
            secure: false, 
            sameSite: "strict", 
            maxAge: 7 * 24 * 60 * 60 * 1000 });
      return res.status(200).json({ token });
    } catch (error) {
        console.error("Google Auth Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = async(req, res) => {  
    try{    
      await res.clearCookie("token");
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Logout Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}