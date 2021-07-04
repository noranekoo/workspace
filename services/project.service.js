const Project = require('../models/project.model')

search = async (req, res, next) => {
    const {name, pagination} = req.body
    const pageIndex = (pagination.page_index-1) * pagination.page_size
    let info = {name: new RegExp(name)}
    return await Project.find(info).then(pjt => {
        let from = pageIndex
        let to = pageIndex+pagination.page_size
        to = to > pjt.length ? pjt.length : to
        let result = pjt.slice(from, to)
        return {
            total: pjt.length,
            pagination: pagination,
            data: result
        }
    }).catch(err => {
        return {success: false, error: err}
    })
}

addProject = async(req, res) =>  await new Project({name: 'Project 1', plan_time: 15, total_time: 300, type: 'Vấn đề'})
.save()
.then(pg => pg)
.catch(err => err)

module.exports = {
    search
}