import jwt from "jsonwebtoken"

export const isAuth = (req, res, next) => {
try {
    let {token} = req.cookies
    if(!token){
        return res.status(401).json({msg : "user does not have a token"})
    }

    const verifyToken =  jwt.verify(token, process.env.JWT_SECRET)

    if(!verifyToken){
        return res.status(401).json({msg : "token is not valid"})
    }

    req.userId = verifyToken.userId
    next()
} catch (error) {
    res.status(500).json({msg : `Auth error : ${error}`})
}
}