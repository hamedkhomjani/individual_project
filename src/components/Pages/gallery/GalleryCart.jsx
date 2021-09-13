import React from 'react'

import './Gallery.css'

function GalleryCart(props) {
    return (
        <div className={props.reverse ? 'gallery-cart-container-reverse' : 'gallery-cart-container'}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${props.item.image}`} className='gallery-image'/>
            <div className='gallery-content-box'>
                <h2>{props.item.name}</h2>
                <p>Artist: {props.item.artist}</p>
                <p>Painting Technique: {props.item.type}</p>
                <p>Year: {props.item.year}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

export default GalleryCart
