import React, {Component} from 'react'
import axios from 'axios'
import Header from './Components/Header'
import Field from './Components/Field'
import Grid from './Components/Grid'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      teams: []
    }

  }

  componentDidMount() {
    axios.get('/api/teams')
      .then(res => this.setState({teams: res.data}))
      .catch(err => console.log(err))
  }

  addTeam = (newTeam) => {
    axios.post('/api/teams', {newTeam: newTeam})
      .then(res => this.setState({teams: res.data}))
      .catch(err => console.log(err))
  }

  deleteTeam = (team) => {
    axios.delete(`/api/teams/${team}`)
      .then(res => this.setState({teams: res.data}))
      .catch(err => console.log(err))
  }

  editLapTime = (driver, lapTime) => {
    axios.put(`/api/teams/${driver}/${lapTime}`)
      .then(res => this.setState({teams: res.data}))
      .catch(err => console.log(err))
  }

  removeDriver = (driver) => {
    axios.put(`/api/teams/${driver}`)
      .then(res => this.setState({teams: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Field teams={this.state.teams} addTeamFn={this.addTeam} deleteTeamFn={this.deleteTeam}/>
        <Grid teams={this.state.teams} editLapTimeFn={this.editLapTime} removeDriverFn={this.removeDriver}/>
      </div>
    )
  }
}

export default App;