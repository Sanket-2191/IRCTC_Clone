import React, { useEffect, useState } from 'react'
import { useToastContext } from '../contexts/ToastContext';

function Toast({ msg }) {

    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(100);

    const { setToastVis } = useToastContext();

    useEffect(() => {
        setProgress(100);
        setVisible(true)
    }, []) // show toast on initial render

    useEffect(() => {
        if (visible) {
            console.log("running");

            const interval = setInterval(() => {
                setProgress((prevState) => prevState - 0.5);
            }, 20)

            const timer = setTimeout(() => setVisible(false), 4000);

            return () => {

                clearInterval(interval)
                clearTimeout(timer);
                setToastVis({
                    vis: false,
                    msg: null
                })
                console.log("cleanup done for Toast");
            }
        }
    }, [visible]);

    return (
        <div className={`bg-blue-900 text-white fixed  h-[40px] w-[250px] flex flex-col shadow-lg shadow-gray-500
        top-10 right-10 z-50 `} style={{ visibility: visible ? 'visible' : 'hidden' }}>
            <div className='flex justify-between items-center  h-[80%] w-[100%] '>
                <div className=' h-[100%] w-[80%] p-[1.5px] box-border' >{msg || 'Some message'}</div>
                <div className='font-extrabold bg-red-900 text-white 
                 cursor-pointer h-[90%] w-[20%] p-[1.5px] flex justify-center items-center'
                    onClick={() => setVisible(false)}>
                    x
                </div>
            </div>
            <div className={`h-[20%]  bg-gray-50 `}
                style={{ width: `${progress}%` }}
            ></div>
        </div>

    )
}

export default Toast
