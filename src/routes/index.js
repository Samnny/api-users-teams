const express = require('express')
const Router = express.Router()

Router.get('/users', (req, res) => res.send('reading user'))
Router.post('/users', (req, res) => res.send('creating user'))
Router.put('/users/:id', (req, res) => {
    const {id} = req.params
    res.send(`updating the ${id} user`)
})
Router.delete('/users/:id', (req, res) => {
    const {id} = req.params
    res.send(`deleting the ${id} user`)
})

Router.get('/teams', (req, res) => res.send('reading team'))
Router.post('/teams', (req, res) => res.send('creating team'))
Router.put('/teams/:id', (req, res) => {
    const {id} = req.params
    res.send(`updating the ${id} team`)
})
Router.delete('/teams/:id', (req, res) => {
    const {id} = req.params
    res.send(`deleting the ${id} team`)
})
module.exports = Router