import { faTrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='relative w-[100%]  h-[15%] flex justify-between items-center p-2 top-0 bg-[rgb(23,37,84)] text-white mb-5'>
                <div className='flex justify-center items-center h-[100%] w-[20%] font-extrabold size-20 '> IRCTC &nbsp;
                    <FontAwesomeIcon icon={faTrain} size="lg" style={{ color: "#d8e6fd" }} /></div>
                <div className='w-fit p-2 flex justify-around ' >
                    <div><button className='formBtn'> <a href=""> Login </a> </button></div>
                    <div><button className='formBtn'> <a href=""> SignUp </a> </button></div>
                    <div><button className='formBtn'> <a href=""> Home </a> </button></div>
                </div>
            </div>
        </>

    )
}

export default Navbar;
