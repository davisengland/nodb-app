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

    handleAdd = () => {
        let newTeam = {
            team: this.state.teamInput,
            drivers: [
                {
                    name: this.state.driverInput,
                    lapTime: 0,
                    photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX////29va7vML5+fnBwsf8/Py4ub/R0tW8vcPw8PHV1djt7e709PS/wMXKys/Pz9Pe3uHd3eDn5+jk5Ob9q3BWAAAEFUlEQVR4nO2d2XarMAxFAwaHecr//+sFkja9LTYyAUvgs1/al7C0I9ngAed2AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADASUlTNRFF0fw3TbkD2pN0FvvL6Mkd2g6Y7N6ap7ZMV+zOLknTe0lyB7sBF78zJtLV72yOW/xmR+7AiaQb/c7i+InfhPhS3Vqgp0njx34TgtP4aYV+ITaNn1eocMX9BEe4ZZbYVVCi4r5+kbz+ZndBaYoHCMoq1J3boDzFgwTlKB4mKOW+uNeTjFzFAwVldKiHCkpoisc1wifsdXpkI3zCXadu0Sr1NbXvAK+gSwqVKvu2SZK2GKLzzKU6xFkVmdY6Hhn/tLmDI2edOoTZx7PdC62Liv5ZPkF6jVbNT7/ZMSnJ3w9fEskh5slvwZFsIH+ezZAaYLUkOFJSL8CVRHIK/pToi4R6Aa4kEqNTnUEw1gX1S+JJIrWfqWqD4KhI7VB57onU4IwpdEkihyD5VtEYBeO4pl6Eo0yp335uTuGYxIF4FY4ypX77D6thL7evoRap6q2Gd6qh/ySSIytshnEj15AY2G6G/ntT74a+GyL5XmG7Hbq0Q+9lSh8ZllbD7gKGloe22GF44b0h0gNTd0sSE4dZArGGtjJ1KFLfXY3TNKlpeDgO813m3AQblsYUUp9KZ/x2NU6GphsGfezEYOg2bb3c2ejG6SKiDaNoQVE3DjOmM6INVRf/76jj3vESwg0jlbf67ah1Q58PPonh5FjU+kl23+An33BafMqHru8euev62mkMn5bbF43PYfgJMISheEPZzzTnM9yyyUT95GqGo1E1dEXbJPVI0xb9kEdOGzIi75NtTnZl0WTzw8z3Q9v0f1MMlUsyZRqqKH+0tTaMD3XWdDk5lX4FaV2NyvsmNuh9jzGagviQKs9QlffMaveWpOzK8D1futrVjMOlmOJHHkx5X5pZi6cn+z3zWKwZel9AXEmgYQeNxbFeKVXfgtaGqKzrvkZH6/Sw//VDS0PcJriy5M2wkG8Opsw2CY6KlnUahs0Y5u/bPIu/hnkbGMdeDGOZWhcMV5L4EJRCY5muLGvbMS56cwiaytS6XriGaT2Raa+3R0OmDaaGc3WOMOQRNCTxCEO2jd6L4RxhyCW4fMM4wJDxhYuleA4w5BNcbIn7G7K+27VQp6qok80s3fGZ389bSuInCKvRWwjvH17/HdIA3gMO4F3uAN7Hv/6ZCgGcixHA2SYBnE8TwBlDAZwTFcBZXwGc1xbAmXv7Pd3Ia4JvdkmjZMEAzi8N4Aza2/XPEZ64+lnQE1c/z3vi6meyTzidBXVCv4mr/zbCzKrkufVeXPs3Sr659O/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh8A83aD43iQ1MdQAAAABJRU5ErkJggg=='
                }
            ]
        }

        this.props.addTeamFn(newTeam)
        this.setState({teamInput: '', driverInput: ''})
    }

    render() {
        return(
            <div className='add-parent'>
                <section className='add-team'>
                    <h3 className='add' >Add Team</h3>
                    <h4 className='add' >Team Name:</h4>
                    <input className='add' value={this.state.teamInput} onChange={event => this.handleTeam(event.target.value)}/>
                    <h4 className='add' >Driver Name:</h4>
                    <input className='add' value={this.state.driverInput} onChange={event => this.handleDriver(event.target.value)}/>
                    <button className='add' onClick={() => this.handleAdd()}>Add</button>
                </section>
            </div>
        )
    }
}

export default AddTeam