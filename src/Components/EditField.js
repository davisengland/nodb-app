import React, {Component} from 'react'

class EditField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamInput: ''
        }
    }

    render() {
        const {teams} = this.props
        let driversMap = teams.drivers.map((elem, i) => {
            return(
                <div key={i} className='driver-info'>
                    <h4>{elem.name}</h4>
                    <img className='photos' src={elem.photo} alt={elem.name} width='250px'/>
                </div>
            )
        })

        return(
            <div>
                <button className='x' onClick={() => this.props.deleteTeamFn(this.props.teams.team)}>X</button>
                <div className='drivers'>{driversMap}</div>
            </div>
        )
    }
}

export default EditField