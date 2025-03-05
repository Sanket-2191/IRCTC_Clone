import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import TrainInfo from '../components/TrainInfo.jsx';
import { useTrainContext } from '../contexts/Traincontext.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import { Typography } from '@material-tailwind/react';
import useForm from '../customHooks/useForm.js';

const Home = () => {

    // const homeDecor = 'flex-col justify-center items-center h-fit w-[60%] mt-10 p-5 m-auto rounded-lg border-[2px] border-blue-950 hover:border-blue-600 '
    // tailwind css classes stored as string and then used as variable in className attribute works fine....


    const { trainDataVisiblity, setTrainDataVisiblity } = useTrainContext();

    const { formData, handleFormChange, clearInputs } = useForm({ pickUp: '', destination: '', date: new Date() })

    const { pickUp, destination, date } = formData;


    const renderTraindata = (e) => {
        e.preventDefault();
        setTrainDataVisiblity(!trainDataVisiblity);
        console.log(trainDataVisiblity);

    }

    const handleClear = () => {
        setTrainDataVisiblity(false);
        clearInputs();
    }
    return (
        <>



            <div className='homeSearchDiv'>
                <Typography variant="h4" color="blue-gray">
                    Book your Train
                </Typography>
                <form action="" onSubmit={renderTraindata} className=' w-[80%] h-full '>

                    <div className=' inputBounds '>
                        <label htmlFor="pickUp" className='labelStyles'>From</label>
                        <input id='pickUp' type="text"
                            value={pickUp}
                            onChange={handleFormChange}
                            required className='  inputStyles' placeholder='Enter the Pickup Station' />
                    </div>
                    <div className=' inputBounds '>
                        <label htmlFor="destination" className='labelStyles'>To</label>
                        <input id='destination' required
                            value={destination}
                            onChange={handleFormChange}
                            type="text" className='  inputStyles' placeholder='Enter the Drop Station' />
                    </div>
                    <div className='inputBounds '>
                        <label htmlFor="date" className='labelStyles'> Date</label>
                        <input id='date' required
                            value={date || ''}
                            onChange={handleFormChange}
                            type="date" className='  inputStyles' placeholder='' />
                    </div>

                    <div>
                        <button className='formBtn' type='submit' > Search</button>
                        <button className='formBtn bg-red-600' type='submit' onClick={handleClear} > Clear</button>
                    </div>
                </form>




            </div >

            <TrainInfo />



        </>

    )
}

export default Home
