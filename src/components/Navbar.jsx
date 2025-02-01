import { faTrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full  h-[15%] flex justify-between items-center p-2 top-0  left-0 bg-blue-950 text-white mb-5'>
            <div className='flex justify-center items-center h-[100%] w-[20%] font-extrabold '>IRCTC &nbsp;
                <FontAwesomeIcon icon={faTrain} size="lg" style={{ color: "#d8e6fd" }} /></div>
            <div className='w-[20%] flex justify-around ' >
                <div><button> <a href=""> Login </a> </button></div>
                <div><button> <a href=""> SignUp </a> </button></div>
                <div><button> <a href=""> Home </a> </button></div>
            </div>
        </div>
    )
}

export default Navbar
