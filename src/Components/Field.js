import React from 'react'
import EditField from './EditField'
import AddTeam from './AddTeam'

const Field = props => {
    const teamsMap = props.teamsArr.map((teams, key) => (
        <EditField
            key={key}
            teamsArr={teams}
            deleteTeamFn={props.deleteTeamFn}/>
    ))

    return(
        <div className='field'>
            <h2 className='field-title'>Field</h2>
            <section className='teams-flex'>{teamsMap}</section>
            {/* <AddTeam addTeamFn={props.addTeamFn}/> */}
        </div>
    )
}

export default Field