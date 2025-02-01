import React from 'react'

const Home = () => {

    const labelDeco = ''
    return (
        <div className=' flex-col justify-center items-center h-fit w-[60%]  top-10 p-5 m-auto rounded-lg shadow-md shadow-blue-950'>

            <div className=' inputBounds '>
                <label htmlFor="from" className='labelStyles'>From</label>
                <input id='from' type="text" className='  inputStyles' placeholder='Enter the Pickup Station' />
            </div>
            <div className=' inputBounds '>
                <label htmlFor="toDestination" className='labelStyles'>To</label>
                <input id='toDestination' type="text" className='  inputStyles' placeholder='Enter the Drop Station' />
            </div>
            <div className='inputBounds '>
                <label htmlFor="dateOfTravel" className='labelStyles'> Date</label>
                <input id='dateOfTravel' type="date" className='  inputStyles' placeholder='' />
            </div>

            <button className='formBtn'> Search</button>

        </div>
    )
}

export default Home
