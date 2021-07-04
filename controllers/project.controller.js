const projectService = require('../services/project.service')

search = async (req, res, next) => {
    const result = await projectService.search(req, res, next)
    res.json(result).status(200)
}

// addProject = async ( req, res) => {
//     const result = await projectService.addProject(req, res)
//     res.json(result).status(200)
//     console.log(auth)
// }

module.exports = {
    search,
     //addProject
}