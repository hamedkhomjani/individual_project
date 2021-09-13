import React from 'react'

import './Videos.css'

function VideoCart(props) {
    return (
        <div className='vide-cart-container'>
            <video controls loop height="150">
                <source src={`../../../assets/videos/${props.item.video}`} type="video/mp4"/>
            </video>
            <p>{props.item.introduction}</p>
        </div>
    )
}

export default VideoCart
