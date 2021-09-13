import React from 'react'

import { VideosMockData } from '../../mocks/VideosMockData';
import VideoCart from './VideoCart';
import './Videos.css'

function Videos() {
    console.log(VideosMockData);
    return (
        <div className='videos-container'>
            <h1  className='videos-header'>
                Videos
            </h1>
            <p className='videos-explain'>
                {`The art car subculture started with several influences - the hippie-themed VWs of the late 1960s, the lowrider, as well as a Merry Pranksters' creation, the decorated school bus known as Furthur.
                During the late 1960s, singer Janis Joplin had a psychedelically-painted Porsche 356 and John Lennon, a paisley Rolls Royce.
                Partly in imitation, the late 1960s/early 1970s counterculture featured many painted VW Buses (sometimes with a peace symbol in place of the giant VW logo) and customized vehicles (e.g. a customized 1977 Cadillac Fleetwood seen in the film Escape from New York).
                `}
            </p>
            <div className='videos'>
                {VideosMockData.map((video) => <VideoCart item={video} />)}
            </div>
        </div>
    )
}

export default Videos
