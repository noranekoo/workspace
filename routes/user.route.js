const router = require('express').Router()
const userController = require('../controllers/user.controller')
router.post('/login', userController.signIn)

router.post('/create', userController.addUser)

module.exports = router