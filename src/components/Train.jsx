import React from 'react'
import { Button } from '@material-tailwind/react';

const Train = ({ info }) => {
    return (
        <div className='w-full m-2 border border-[rgb(23,37,84)] h-[22vh] '>
            <div className='font-bold h-[25%] bg-[#2563eb] text-white p-3 flex items-center' > {info.trainName}</div>
            <div className='flex justify-between items-center'>
                <div className='text-center m-2 '>
                    {info.departureTime} <span className='font-bold mr-1'>|</span>{info.departureStation}
                    <span className='font-bold m-1'>|</span>{info.departureDate}
                </div>
                <div className='text-center m-2'>
                    {info.arrivalTime} <span className='font-bold mr-1'>|</span>{info.arrivalStation}
                    <span className='font-bold m-1'>|</span>{info.arrivalDate}
                </div>
            </div>
            <Button
                ripple={false}
                className=' bg-[#2563eb] text-white shadow-none hover:scale-105 
                 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 font-serif'>
                {info.price}/- Rs
            </Button>

        </div >
    )
}

export default Train;

/*
{
            "trainName": "Rajdhani Express",
            "departureStation": "New Delhi",
            "arrivalStation": "Mumbai Central",
            "departureDate": "Thu, 27 Feb",
            "departureTime": "18:00",
            "arrivalDate": "Fri, 28 Feb",
            "arrivalTime": "08:30"
        }
*/