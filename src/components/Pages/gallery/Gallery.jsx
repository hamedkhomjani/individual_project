import React from 'react'

import {PaintsMockData} from '../../mocks/PaintsMockData';
import GalleryCart from './GalleryCart'
import './Gallery.css'

function Gallery() {
    return (
        <div className='gallery-container'>
            <h1  className='gallery-header'>
                Gallery
            </h1>
            <div className='paints'>
                {PaintsMockData.map((paint, index)=> {
                    if((index+1)%2 === 0) {
                        return(
                            <GalleryCart item={paint} reverse={true}/>
                        )
                    }
                    else{
                        return (
                            <GalleryCart item={paint}/>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Gallery
