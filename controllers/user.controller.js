const userService = require('../services/user.service')

addUser = async (req, res) => {
    const result = await userService.addUser(req, res)
    res.json(result).status(200)
}

signIn = async (req, res) => {
    const result = await userService.signIn(req, res)
    res.json(result).status(200)
}

module.exports = {
    addUser,
    signIn
}