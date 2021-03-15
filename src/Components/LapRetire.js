import React, {Component} from 'react'

class LapRetire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logNameInput: '',
            logTimeInput: '',
            retireNameInput: ''
        }
    }

    handleLogName = (val) => {
        this.setState({logNameInput: val})
    }

    handleLogTime = (val) => {
        this.setState({logTimeInput: val})
    }

    handleRetireName = (val) => {
        this.setState({retireNameInput: val})
    }

    handleLogLap = () => {
        this.props.editLapTimeFn(this.state.logNameInput, this.state.logTimeInput)
        this.setState({logNameInput: '', logTimeInput: ''})
    }

    handleRetire = () => {
        this.props.removeDriverFn(this.state.retireNameInput)
        this.setState({retireNameInput: ''})
    }

    render() {
        return(
            <div className='log-retire'>
                <section className='log'>
                    <h3 className='log-elem'>Log New Lap</h3>
                    <h4 className='log-elem'>Driver Name:</h4>
                    <input className='log-elem' value={this.state.logNameInput} onChange={event => this.handleLogName(event.target.value)}/>
                    <h4 className='log-elem'>Lap Time:</h4>
                    <input className='log-elem' value={this.state.logTimeInput} onChange={event => this.handleLogTime(event.target.value)}/>
                    <button className='log-elem' onClick={() => this.handleLogLap()}>Log</button>
                </section>
                <section className='retire'>
                    <h3 className='log-elem retire-car'>Retire Car</h3>
                    <h4 className='log-elem'>Driver Name:</h4>
                    <input className='log-elem' value={this.state.retireNameInput} onChange={event => this.handleRetireName(event.target.value)}/>
                    <button className='log-elem retire-button' onClick={() => this.handleRetire()}>Retire</button>
                </section>
            </div>
        )
    }
}

export default LapRetire