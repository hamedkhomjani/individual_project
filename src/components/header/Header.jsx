import React from 'react'
import Socials from './socials/Socials'
import Navbar from './navbar/Navbar'
import './Header.css'

function header() {
    return (
        <div className='header-container'>
            <Navbar />
            <Socials />
            
        </div>
    )
}

export default header
