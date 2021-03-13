import React, {Component} from 'react'

class EditField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamInput: ''
        }
    }

    render() {
        const {teamsArr} = this.props

        // let driversMap = teams.drivers.map((elem, i) => {
        //     return(
        //         <div className='driver-info'>
        //             <h4>{elem.name}</h4>
        //             <img src={elem.photo} alt={elem.name}/>
        //         </div>
        //     )
        // })

        return(
            <div>
                <h3>{teamsArr.name}</h3>
                <button onClick={() => this.props.deleteTeamFn}>X</button>
                {/* <div>{driversMap}</div> */}
            </div>
        )
    }
}

export default EditField