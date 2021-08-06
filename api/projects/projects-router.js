// Write your "projects" router here!

const express = require("express")
const Projects = require("./projects-model")

const { validateProjectId, validateProject } = require("./projects-middleware")

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        await Projects.get()
        .then(projects => {
            res.json(projects)
    })
    }
    catch (error) {
        next(error)
    }
})

router.get("/:id", validateProjectId, (req, res) => {
    res.json(req.project)
})

router.post("/", validateProject, (req, res, next) => {
    Projects.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
})

router.put("/:id", validateProjectId, validateProject, async (req, res, next) => {
    const updatedProject = await Projects.update(req.params.id, req.body)
    try {
        res.json(updatedProject)
    }
    catch (error){
        next(error)
    }
})

router.delete("/:id", validateProjectId, (req, res, next) => {
    Projects.remove(req.params.id)
    .then(data => {
        res.json(req.project)
    })
    .catch(next)
})

router.get("/:id/actions", validateProjectId, (req, res, next) => {
    Projects.update(req.params.id, req.body)
    .then(project => {
        res.json(project)
    })
    .catch(next)
})

// Error Handling Middleware 
router.use((error, req, res, next) => {
    res.status(error.status || 500).json({ message: error.message})
  })

module.exports = router