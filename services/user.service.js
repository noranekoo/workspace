const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const auth = require('../controllers/auth')
changePassword = () => {

}

addUser = async (req, res) => {
    const {user_name, password, email} = req.body
    let pass = await bcrypt.hash(password,10)
    return await new User({
        user_name: user_name, password: pass, email: email
    }).save().then(usr => {
        return {data: usr._doc, success: true}
    }).catch(err => {
        return {...err, success: false}
    })
}

signIn = async (req, res) => {
    const {user_name, password} = req.body
    const user = await User.findOne({user_name: user_name})
    if(user != null){
        return await bcrypt.compare(password, user.password).then(e => {
            if(e){
                const token = auth.generateToken(user)
                return {access_token: token, success: true}
            }
            return {success: false}
        })
    }
    return {success: false}
}

module.exports = {
    addUser,
    signIn
}