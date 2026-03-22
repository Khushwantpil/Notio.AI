import jwt from "jsonwebtoken";

const isAuth = async(req, res, next) => {
    try{
        let {token} = req.cookies
        if (!token){
            return res.status(400).json({error: "Token Not find"})
        }
        let decodedToken =   jwt.verify(token, process.env.JWT_SECRET)
        if(!decodedToken){
            return res.status(400).json({error: "Invalid Token"})
        }
        req.userId = decodedToken.userId
        next()
    } catch (error) {
        console.error("Authentication Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default isAuth