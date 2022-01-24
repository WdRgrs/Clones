import React from 'react';

function NetflixVideo() {
    return (
        <div>
            {/* <iframe id='video' src="https://www.youtube.com/embed/5MC1dFvCmC8?autoplay=1&rel=1&controls=0&iv_load_policy=3&modestbranding=1&loop=1" title='cobra-kai-background'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            /> */}
            <iframe id='video' src="https://player.vimeo.com/video/655516741?h=a72147ab90&autoplay=1&loop=0&title=0&byline=0&portrait=0" title='cobra-kai-background'
                // allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    )
}

export default NetflixVideo;
