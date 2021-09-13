import React from 'react'

import './Videos.css'

function VideoCart(props) {
    return (
        <div className='video-cart-container'>
            <video controls loop width='250'>
                <source src={`${process.env.PUBLIC_URL}/assets/videos/${props.item.video}`} type="video/mp4"/>
            </video>
            <p>{props.item.introduction}</p>
        </div>
    )
}

export default VideoCart
