const database = require('../../db')
const Teams = require('../models/teams')

const TeamsController = {
    createTeam: async (req, res) => {
        let { name, active } = req.body
        try {

            const result = await Teams.create({
                name,
                active,
                updatedAt: new Date(),
                createdAt: new Date()
            })

            console.log(result)
            res.send('Team created successfully.')

        } catch (error) {
           console.log(error)
           res.status(401).send('Erro!')
        }
    },
    showAllTeams: async (req, res) => {
        try {
            
            const result = await Teams.findAll()
            res.send(result)

        } catch (error) {
            console.log(error)
           res.status(401).send('Erro!') 
        }
    },
    showTeams: async (req, res) => {
        const {id} = req.params
        try {
            
            const result = await Teams.findByPk(id)
            if(!result) {
                res.status(400).send("This team was't find")
                return
            }
            res.send(result)

        } catch (error) {
            console.log(error)
           res.status(401).send('Erro!') 
           return
        }
    },
    updateTeams: async (req, res) => {
        const {id} = req.params
        let { name, active } = req.body
        try {
            
            const team = await Teams.findByPk(id)
            if(!team) {
                res.status(400).send("This team was't find")
                return
            }
            team.set({
                
                    name,
                    active,
                    updatedAt: new Date()
                
            })
            const result = await team.save()
            res.send(result)

        } catch (error) {
            console.log(error)
           res.status(401).send('Erro!') 
           return
        }
    },
    deleteTeams: async (req, res) => {
        const {id} = req.params
        let { name, active } = req.body
        try {
            
            const team = await Teams.findByPk(id)
            if(!team) {
                res.status(400).send("This team was delete")
                return
            }
            team.set({
                    active: 0,
                    updatedAt: new Date()
                
            })
            const result = await team.save()
            res.send(result)

        } catch (error) {
            console.log(error)
            res.status(401).send('Erro!') 
            return
        }
    },
    showTeamsBySituation: async (req, res) => {
        let { situation } = req.params
        try {
            let active = situation === 'active' ? 1 : 0
            const result = await Teams.findAll({
                where: {
                    active
                }
            })
            res.send(result)
        } catch (error) {
            console.log(error)
            res.status(401).send('Erro!')  
        }

    }
}

module.exports = TeamsController
 