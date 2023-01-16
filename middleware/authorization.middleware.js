const jwt = require('jsonwebtoken')
const jwt_secret = process.env.jwtSecret;
const authorization = (req,res,next)=>{
    const token = req.headers.authorization;
    try {
        if(token){
            const data = jwt.verify(token, jwt_secret);
            req.userID = data;
            next()
        } else{
            res.status(400).send('Login required!')
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = authorization;