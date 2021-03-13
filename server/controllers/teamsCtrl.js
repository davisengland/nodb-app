const teams = require('../../f1-teams.json')

module.exports = {

    getTeams: (req, res) => {
        res.status(200).send(teams)
    },
    
    addTeam: (req, res) => {
        const {team, driver} = req.body

        newTeam = {
            team: team,
            drivers: [
                {
                    name: driver,
                    lapTime: 0
                }
            ]
        }

        teams.push(newTeam)
        res.status(200).send(teams)
    },

    deleteTeam: (req, res) => {
        const {team} = req.params

        const index = teams.findIndex(elem => elem.team === team)
        teams.splice(index, 1)
        res.status(200).send(teams)
    },

    editLapTime: (req, res) => {
        const {driver, lapTime} = req.params

        for(let i = 0; i < teams.length; i++) {
            const driverObj = teams[i].drivers.find(elem => elem.name === driver)
            if(driverObj) {
                driverObj.lapTime = +lapTime
                res.status(200).send(teams)
            }
        }
    },

    removeDriver: (req, res) => {
        const {driver} = req.body

        for(let i = 0; i < teams.length; i++) {
            const index = teams[i].drivers.findIndex(elem => elem.name === driver)
            if(index >= 0) {
                teams[i].drivers.splice(index, 1)
                res.status(200).send(teams)
            }
        }
    }
}