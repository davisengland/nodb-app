import React, {Component} from 'react'

class AddTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamInput: '',
            driverInput: ''
        }
    }

    handleTeam = (val) => {
        this.setState({teamInput: val})
    }

    handleDriver = (val) => {
        this.setState({driverInput: val})
    }

    render() {
        return(
            <div>
                <section>
                    <h3>Add Team</h3>
                    <h4>Team Name:</h4>
                    <input value={this.state.teamInput} onChange={event => this.handleTeam(event.target.value)}/>
                    <h4>Driver Name:</h4>
                    <input value={this.state.driverInput} onChange={event => this.handleDriver(event.target.value)}/>
                    <button onClick={() => this.handleAdd(this.props)}>Add</button>
                </section>
            </div>
        )
    }
}

export default AddTeam