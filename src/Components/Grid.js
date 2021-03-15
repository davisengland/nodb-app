import React from 'react'
import Positions from './Positions'
import LapRetire from './LapRetire'

const Grid = props => {
    let {teams} = props
    let driversArr = []
    for(let i = 0; i < teams.length; i++) {
        for(let j = 0; j < teams[i].drivers.length; j++) {
            driversArr.push(teams[i].drivers[j])
        }
    }

    return(
        <div className='grid'>
            <h2>Current Grid Positions</h2>
            <Positions
                teams = {teams}
                driversArr = {driversArr}/>
            <div>
                <LapRetire
                    teams = {teams}
                    editLapTimeFn = {props.editLapTimeFn}
                    removeDriverFn = {props.removeDriverFn}/>
            </div>
        </div>
    )
}

export default Grid