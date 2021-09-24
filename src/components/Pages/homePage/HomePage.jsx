import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css'

import car from '../../../assets/images/home_car.png'

function HomePage() {
    const [move, setMove] = useState(false);

    useEffect(() => {
        const moveCar = () => setMove(!move);
        moveCar();
    }, [])

    
    return (
        <div className='home-container'>
                <div className='home-content'>
                    <p>Discover Arts of Cars' world with CarArt</p>
                    <Link to='/gallery'><button type="button">More</button></Link>
                </div>
                <img src={car} alt="car" className={move ? 'home-car-image active' : 'home-car-image'}/>
        </div>
    )
}

export default HomePage
