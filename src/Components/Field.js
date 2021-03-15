import React from 'react'
import EditField from './EditField'
import AddTeam from './AddTeam'

const Field = props => {
    let {teams} = props
    let teamsMap = teams.map((teams, i) => (
        <div key={i} className='teams'>
            <h3>{teams.team}</h3>
            <EditField
                teams={teams}
                deleteTeamFn={props.deleteTeamFn}/>
        </div>
    ))

    return(
        <div className='field'>
            <h2 className='field-title'>Field</h2>
            <section className='teams-flex'>{teamsMap}</section>
            <AddTeam teams={teams} addTeamFn={props.addTeamFn}/>
        </div>
    )
}

export default Field