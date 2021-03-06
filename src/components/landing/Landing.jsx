import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from '../Pages/About/About';
import Gallery from '../Pages/gallery/Gallery';
import HomePage from '../Pages/homePage/HomePage';
import Videos from '../Pages/videos/Videos';
import logo from '../../assets/images/logo_CarArt.png'

import './Landing.css'

function Landing() {
    return (
        <div className='landing-container'>
             <div id='logo-container'>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route path='/gallery' component={Gallery}></Route>
                <Route path='/videos' component={Videos}></Route>
                <Route path='/about' component={About}></Route>
            </Switch>
        </div>
    )
}

export default Landing
