import React from 'react'
import './netflix.css'
// import NetflixBox from './NetflixBox'
import NetflixNav from './NetflixNav'
import OnNetflixCat from './OnNetflixCat'


function NetflixHomePg() {
    // interpolation for random videos on refresh
    let netflixCategories = ['Only on Netflix', 'Trending Now', 'New This Week', 'Award-Winning Bingeworthy TV Shows']


    return (
        <main id='netflix-main-container'>
            <NetflixNav 
            />

            <iframe id='video' src="https://www.youtube.com/embed/5MC1dFvCmC8?autoplay=1&rel=1&controls=0&iv_load_policy=3&modestbranding=1&loop=1" title='cobra-kai-background'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />

            <div id='blocker'>Blocker div</div>

{/* Map over categories array - reuse component */}
            {netflixCategories.map(x => 
                    <OnNetflixCat 
                        netflixCategories={x}
                    />
                )
            }

        </main>
    )
}

export default NetflixHomePg
