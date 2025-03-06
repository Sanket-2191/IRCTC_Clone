import { faL, faTrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import styles from './Navlink.module.css'
import { auth } from '../config/fireStore.config'
import { useAuthContext } from '../contexts/AuthContext'
import { useToastContext } from '../contexts/ToastContext'
import Conformationbox from './Conformationbox'

const Navbar = () => {
    const { loggedIn, setLoggedIn } = useAuthContext();
    const { setToastVis } = useToastContext();
    const [confVis, setConfVis] = useState(false);
    const navigate = useNavigate();


    const handleLogout = () => {

        setLoggedIn(false);
        console.log("After clicking logout:", auth);
        setToastVis({
            vis: true,
            msg: 'LoggedOut :-('
        })

        navigate('/login');

    }

    return (
        <>
            <div className={`relative w-[100%] h-[100%] bg-gray-400 `}>


                <div className={`absolute inset-0 ${confVis ? 'backdrop-blur-md bg-black bg-opacity-40  z-10' : ''}`} />
                {confVis && <Conformationbox confVis={confVis} setConfVis={setConfVis} handleLogout={handleLogout} />}

                <div className={`relative w-[100%]  h-[15%] flex justify-between items-center p-2 top-0 bg-[rgb(23,37,84)]
text-white mb-5 `}>
                    <div className='flex justify-center items-center h-[100%] w-[20%] font-extrabold size-20 '> IRCTC &nbsp;
                        <FontAwesomeIcon icon={faTrain} size="lg" style={{ color: "#d8e6fd" }} />
                    </div>
                    <div className='w-fit  flex justify-around mr-5' >


                        <NavLink to='/' className={({ isActive }) => ` ${isActive ? styles.activeStyle : ""} formBtn`}>
                            Home
                        </NavLink>

                        {!loggedIn ? (<>
                            <NavLink to='/login' className={({ isActive }) => ` ${isActive ? styles.activeStyle : ""} formBtn`}>
                                Login
                            </NavLink>

                            <NavLink to='/signup' className={({ isActive }) => ` ${isActive ? styles.activeStyle : ""} formBtn`}>
                                Signup
                            </NavLink>
                        </>) :

                            <button className=' formBtn'
                                onClick={() => setConfVis(true)}>
                                LogOut
                            </button>}


                    </div>
                </div >

                <div className='m-5 h-[85%] flex flex-col justify-center items-center'>
                    <Outlet />
                </div>
            </div>

        </>

    )
}

export default Navbar;


