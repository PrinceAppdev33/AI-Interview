import jwt from "jsonwebtoken"

const isAuth = (req, res, next) => {
try {
    console.log("isAuth called");
    let {token} = req.cookies
    if(!token){
        return res.status(401).json({msg : "user does not have a token"})
    }
    console.log("Token:", token);
    const verifyToken =  jwt.verify(token, process.env.JWT_SECRET)
    console.log("JWT verified:", verifyToken);

    if(!verifyToken){
        return res.status(401).json({msg : "token is not valid"})
    }

    req.userId = verifyToken.userId
    console.log("calling next()");
    next()
} catch (error) {
    console.error("Auth error:", error);
    return res.status(500).json({
        msg: error.message,
    });
}
}

export default isAuth