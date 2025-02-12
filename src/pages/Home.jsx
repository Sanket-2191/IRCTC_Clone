import React from 'react'
import Navbar from '../components/Navbar.jsx'
import TrainInfo from '../components/TrainInfo.jsx';
import { useTrainContext } from '../contexts/Traincontext.jsx';

const Home = () => {

    // const homeDecor = 'flex-col justify-center items-center h-fit w-[60%] mt-10 p-5 m-auto rounded-lg border-[2px] border-blue-950 hover:border-blue-600 '
    // tailwind css classes stored as string and then used as variable in className attribute works fine....


    const { trainDataVisiblity, setTrainDataVisiblity } = useTrainContext();


    const renderTraindata = () => {
        setTrainDataVisiblity(!trainDataVisiblity);
        console.log(trainDataVisiblity);

    }
    return (
        <>

            <div className='homeSearchDiv'>
                <Navbar />
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

                <button className='formBtn' onClick={renderTraindata}> Search</button>



            </div >

            <TrainInfo />
        </>

    )
}

export default Home
