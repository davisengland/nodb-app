const express = require('express')
const teams = require('../f1-teams.json')
const teamsCtrl = require('./controllers/teamsCtrl')
const app = express()
const port = 4242


app.use(express.json())

app.get('/api/teams', teamsCtrl.getTeams)
app.post('/api/teams', teamsCtrl.addTeam)
app.delete('/api/teams/:team', teamsCtrl.deleteTeam)
app.put('/api/teams/:driver/:lapTime', teamsCtrl.editLapTime)
app.put('/api/teams/:driver', teamsCtrl.removeDriver)

app.listen(port, () => console.log(`Server is running on ${port}`))