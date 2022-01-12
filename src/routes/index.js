const express = require('express')
const Router = express.Router()
const TeamsController = require('../controllers/teams')
const UsersController = require('../controllers/users')

Router.get('/users/:id', UsersController.showUsers)
Router.get('/users', UsersController.showAllUsers)
Router.get('/users/find/:situation', UsersController.showUsersBySituation)
Router.post('/users', UsersController.createUser)
Router.put('/users/:id', UsersController.updateUsers)
Router.delete('/users/:id', UsersController.deleteUsers)

Router.get('/teams/:id', TeamsController.showTeams)
Router.get('/teams', TeamsController.showAllTeams)
Router.get('/teams/find/:situation', TeamsController.showTeamsBySituation)
Router.post('/teams', TeamsController.createTeam)
Router.put('/teams/:id', TeamsController.updateTeams)
Router.delete('/teams/:id', TeamsController.deleteTeams)
module.exports = Router