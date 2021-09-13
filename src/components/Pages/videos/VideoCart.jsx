import React from 'react'

import './Videos.css'

function VideoCart(props) {
    return (
        <div className='vide-cart-container'>
            <video controls loop height="150">
                <source src={`../../../assets/videos/${props.item.image}`} type="video/mp4"/>
            </video>
            <p>{props.item.description}</p>
        </div>
    )
}

export default VideoCart
