// add middlewares here related to projects
const Projects = require("./projects-model")

async function validateProjectId (req, res, next) {
    try {
        const project = await Projects.get(req.params.id)
        if (!project) {
            next({status: 404})
        }
        else {
            req.project = project
            next()
        }
    }
    catch (error) {
        res.status(500).json({ message: "error accessing server" })
    }
}

function validateProject (req, res, next) {
    const { name, description } = req.body
    if (!name || !name.trim()) {
      next({ status: 400, message: "missing required name field" })
    }
    else if (!description || !description.trim()) {
        next({ status: 400, message: "missing required description field" })
    }
    else {
      req.name = name.trim()
      req.description = description.trim()
      next()
    }
  }

module.exports = {
    validateProjectId,
    validateProject
}