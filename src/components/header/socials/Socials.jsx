import React from 'react'

import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook.svg';
import { ReactComponent as InstgramIcon } from '../../../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/icons/twitter.svg';

import './Socials.css'
function Channels() {
    return (
        <div className='socials-network'>
           
            <a className='socials-icon'>
                <FacebookIcon/>
            </a>
            <a className='socials-icon'>
                <InstgramIcon />
            </a>
            <a className='socials-icon'>
                <TwitterIcon />
            </a>

        </div>
    )
}

export default Channels
