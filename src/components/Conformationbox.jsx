import React from 'react'

const Conformationbox = ({ confVis, setConfVis, handleLogout }) => {

    const handleConformation = (e) => {
        if (e.target.id === 'ok') {

            handleLogout();
        }
        setConfVis(false);

    }

    return (
        <div className='z-50  bg-blue-900 shadow-lg
         shadow-white fixed p-10 top-[35%] left-[35%]'
            style={{
                visibility: confVis ? 'visible' : 'hidden'
            }}
        >
            <div>You will be logged out of this device!</div>
            <div>
                <div className='formBtn bg-red-600 border border-white' onClick={handleConformation} id='ok' >Ok</div>
                <div className='formBtn bg-blue-900 border border-white' onClick={handleConformation} id='cancel' >Cancel</div>
            </div>

        </div>
    )
}

export default Conformationbox
