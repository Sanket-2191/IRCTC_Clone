import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import TrainInfo from '../components/TrainInfo.jsx';
import { useTrainContext } from '../contexts/Traincontext.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import { Typography } from '@material-tailwind/react';

const Home = () => {

    // const homeDecor = 'flex-col justify-center items-center h-fit w-[60%] mt-10 p-5 m-auto rounded-lg border-[2px] border-blue-950 hover:border-blue-600 '
    // tailwind css classes stored as string and then used as variable in className attribute works fine....


    const { trainDataVisiblity, setTrainDataVisiblity } = useTrainContext();


    const renderTraindata = (e) => {
        e.preventDefault();
        setTrainDataVisiblity(!trainDataVisiblity);
        console.log(trainDataVisiblity);

    }
    return (
        <>



            <div className='homeSearchDiv'>
                <Typography variant="h4" color="blue-gray">
                    Book your Train
                </Typography>
                <form action="" onSubmit={renderTraindata} className=' w-[80%] h-full '>

                    <div className=' inputBounds '>
                        <label htmlFor="from" className='labelStyles'>From</label>
                        <input id='from' type="text" required className='  inputStyles' placeholder='Enter the Pickup Station' />
                    </div>
                    <div className=' inputBounds '>
                        <label htmlFor="toDestination" className='labelStyles'>To</label>
                        <input id='toDestination' required type="text" className='  inputStyles' placeholder='Enter the Drop Station' />
                    </div>
                    <div className='inputBounds '>
                        <label htmlFor="dateOfTravel" className='labelStyles'> Date</label>
                        <input id='dateOfTravel' required type="date" className='  inputStyles' placeholder='' />
                    </div>

                    <button className='formBtn' type='submit' > Search</button>
                </form>




            </div >

            <TrainInfo />



        </>

    )
}

export default Home
