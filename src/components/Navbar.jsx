import { faL, faTrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Navlink.module.css'

const Navbar = () => {



    return (
        <>
            <div className='relative w-[100%]  h-[15%] flex justify-between items-center p-2 top-0 bg-[rgb(23,37,84)] text-white mb-5'>
                <div className='flex justify-center items-center h-[100%] w-[20%] font-extrabold size-20 '> IRCTC &nbsp;
                    <FontAwesomeIcon icon={faTrain} size="lg" style={{ color: "#d8e6fd" }} />
                </div>
                <div className='w-fit  flex justify-around ' >

                    <div>
                        <NavLink to='/login' className={({ isActive }) => ` ${isActive ? styles.activeStyle : ""} formBtn`}>
                            Login
                        </NavLink>

                    </div>
                    <div>

                        <NavLink to='/signup' className={({ isActive }) => ` ${isActive ? styles.activeStyle : ""} formBtn`}>
                            Signup
                        </NavLink>
                    </div>
                    <div>

                        <NavLink to='/' className={({ isActive }) => ` ${isActive ? styles.activeStyle : ""} formBtn`}>
                            Home
                        </NavLink>
                    </div>

                </div>
            </div >
        </>

    )
}

export default Navbar;
