import React from 'react'

const Home = () => {
    return (
        <div>

            <div>
                <label htmlFor="from"></label>
                <input id='from' type="text" />
            </div>
            <div>
                <label htmlFor="toDestination"></label>
                <input id='toDestination' type="text" />
            </div>
            <div>
                <label htmlFor="dateOfTravel"></label>
                <input id='dateOfTravel' type="date" />
            </div>

        </div>
    )
}

export default Home
