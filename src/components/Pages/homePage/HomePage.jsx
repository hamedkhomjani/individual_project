import React from 'react'
import { Link } from 'react-router-dom';

import './HomePage.css'

import car from '../../../assets/images/home_car.png'

function HomePage() {
    return (
        <div className='home-container'>
                <div className='home-content'>
                    <p>Discover Arts of Cars' world with CarArt</p>
                    <Link to='/gallery'><button type="button">More</button></Link>
                </div>
                <img src={car} alt="car" className='home-car-image'/>
        </div>
    )
}

export default HomePage
