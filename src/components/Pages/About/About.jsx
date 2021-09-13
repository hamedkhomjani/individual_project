import React from 'react'

import personal from '../../../assets/images/personal_image.png';
import './About.css'

function About() {
    return (
        <div className='about-container'>
            <img src={personal} width='150' height='150' />
            <h1 id='about-name'>Alexander Opanasenko</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra mauris laoreet blandit semper. Fusce fringilla mi nisi, eu dapibus elit vulputate ut. Vestibulum aliquam venenatis euismod. Integer quis urna nec est interdum maximus.
            </p>
            <a className='about-learn-more'>LEARN MORE ABOUT THIS ARTIST</a>
        </div>
    )
}

export default About
