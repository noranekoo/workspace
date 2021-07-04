const router = require('express').Router()
const { json } = require('body-parser')
//const project = require('../models/project.model')
const projectController = require('../controllers/project.controller')
router.post('/',projectController.search)

//router.post('/create',projectController.addProject)

module.exports = router