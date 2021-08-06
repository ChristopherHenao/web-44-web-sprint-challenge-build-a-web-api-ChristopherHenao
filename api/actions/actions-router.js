// Write your "actions" router here!

const express = require("express")
const Actions = require("./actions-model")

const router = express.Router()

router.get('/'), async (req, res, next) => {
    res.json("foo")
}

router.get('/api/actions/:id', (req, res) => {
    res.json("foo")
})

router.post('/api/actions/', (req, res) => {
    res.json("foo")
})

router.put('/api/actions/:id', (req, res) => {
    res.json("foo")
})

router.delete('/api/actions/:id', (req, res) => {
    res.json("foo")
})


module.exports = router