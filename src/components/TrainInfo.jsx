import React, { useEffect, useState } from 'react'
import styles from './trainInfo.module.css'
import { allTrainData } from '../assets/allTrains.jsx';
import { useTrainContext } from '../contexts/Traincontext.jsx';
import Train from './train.jsx';

const TrainInfo = (props) => {

    const [trains, setTrains] = useState([]);

    const { trainDataVisiblity } = useTrainContext();
    // console.log("out side useeffect", allTrainData);

    useEffect(() => {

        if (trainDataVisiblity) {
            setTrains([]); // Clear previous data
            console.log("Fetching train data...");

            // Simulate API call with delay
            new Promise((resolve) => {
                setTimeout(() => resolve(allTrainData), 2000);
            }).then((data) => {

                setTrains(data)
                console.log('after promise in useEffect', trains);
            });
        }

        return () => {

        }

        // console.log();

    }, [trainDataVisiblity])



    return (
        <div className={styles.infoCard}>

            <span className='font-bold'> Train Info </span>

            <div className='  p-5 w-[100%] '>
                {trainDataVisiblity && (
                    trains.length == 0 ? <h1>Loading...</h1> :

                        <div className=' w-[100%] flex flex-col items-center'>
                            {
                                trains.map((t, i) =>
                                    <Train info={t} key={i} />
                                )
                            }
                        </div >
                )}
            </div>




        </div>
    )
}


export default TrainInfo
