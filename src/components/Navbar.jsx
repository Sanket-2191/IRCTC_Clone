import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between p-2'>
            <div>IRCTC</div>
            <div className='w-fit flex justify-around ' >
                <div><button>Login</button></div>
                <div><button>SignUp</button></div>
                <div><button>Home</button></div>
            </div>
        </div>
    )
}

export default Navbar
