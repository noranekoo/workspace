const jwt = require('jsonwebtoken')
const Const = require('../constants/stringconst')
const generateToken = (data) => {
    return jwt.sign({payload: data}, process.env.PRIVATE_KEY,{algorithm:'HS256', expiresIn: '1h'})
}

const verifyToken = (code) => {
    if(code === undefined) return ''
    let token = code.split(' ')[1]
    try{
        return jwt.verify(token, process.env.PRIVATE_KEY, {algorithms: ['HS256']})
    }
    catch(err){
        return ''
    }
}

const checkExpire = (time) => {
    const time_now = Date.now()
    const ckTime = Date.now()+time
    return time_now < ckTime
}

requireLogin = (req, res, next) => {
    const token = req.headers['authorization']
    if(token === undefined) return res.json({success: false, error: Const.USER.AUTHORIZATION_FAILED}).status(401)
    try{
        const data = verifyToken(token)
        return checkExpire(data.iat) ? next() : res.json({success: false, error: Const.USER.AUTHORIZATION_FAILED}).status(401)
    }
    catch(err){
        return res.json({success: false, error: Const.USER.AUTHORIZATION_FAILED}).status(401)
    }
}


module.exports = {generateToken, requireLogin,verifyToken}

