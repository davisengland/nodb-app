import React from 'react'

const Positions = props => {
    const {teams, driversArr} = props

    function compare(a, b) {
        const driverA = a.lapTime
        const driverB = b.lapTime

        let comparison = 0
        if(driverA > driverB) {
            comparison = 1
        } else if(driverA < driverB) {
            comparison = -1
        }
        return comparison
    }

    driversArr.sort(compare)
    let firstTen = driversArr.slice(0, 10)
    let lastTen = driversArr.slice(10)

    let firstTenMap = firstTen.map((elem, i) => (
        <div>
            #{i + 1} {elem.name} / {Math.floor(elem.lapTime/60)}:{elem.lapTime%60}
        </div>
    ))

    let lastTenMap = lastTen.map((elem, i) => (
        <div key={i}>
            #{i + 11} {elem.name} / {Math.floor(elem.lapTime/60)}:{elem.lapTime%60}
        </div>
    ))

    let driverObj = {}
    let index = 0

    for(let i = 0; i < teams.length; i++) {
        driverObj = teams[i].drivers.find(elem => elem.name === firstTen[0].name)
        if(driverObj) {
            index = i
        }
    }

    return(
        <div>
            <section className='pole'>
                <img className='car' src={teams[index]?.carImage} alt={teams[index]?.team}/>
                <p className='leader'>{firstTen[0]?.name} is on pole with a lap time of {Math.floor(firstTen[0]?.lapTime/60)}:{firstTen[0]?.lapTime%60}</p>
            </section>
            <list className='positions'>
                <div>{firstTenMap}</div>
                <div>{lastTenMap}</div>
                </list>
            
        </div>
    )
}

export default Positions