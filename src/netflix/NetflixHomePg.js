import React from 'react'
import NetflixNav from './NetflixNav'

function NetflixHomePg() {
    return (
        <main id='netflix-main-container'>
            <NetflixNav 
            />
            Netflix Browsing Page!
            {/* <video
                autoPlay={true}
                muted 
                loop 
                id="video"
            >
                <source
            src="https://www.youtube.com/embed/5MC1dFvCmC8" />
            </video>   */}
            <iframe id='video' src="https://www.youtube.com/embed/5MC1dFvCmC8?autoplay=1&rel=1&controls=0&iv_load_policy=3&modestbranding=1&loop=1" title='cobra-kai-background'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />

            <div id='next'>Next</div>
            <div id='next'>
            <div id='boxes'>Boxes</div>
            <div id='boxes'>Boxes</div>
            <div id='boxes'>Boxes</div>
            <div id='boxes'>Boxes</div>
            </div>
        </main>
    )
}

export default NetflixHomePg
