const jwt = require("jsonwebtoken")

const isAuthenticated = async(req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token){
            res.status(401).json({message : "User not authenticated"})
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY)
        if(decode){
            res.status(401).json({message : "Invalid token found"})
        }
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error)
    }
}