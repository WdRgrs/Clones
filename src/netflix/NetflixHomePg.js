import React from 'react'
import './netflix.css'
// import NetflixBox from './NetflixBox'
import NetflixNav from './NetflixNav'
import NetflixVideo from './NetflixVideo'
import OnNetflixCat from './OnNetflixCat'

function NetflixHomePg() {
    // interpolation for random videos on refresh
    let netflixCategories = ['Only on Netflix', 'Trending Now', 'New This Week', 'Award-Winning Bingeworthy TV Shows']

    return (
        <main id='netflix-main-container'>
            <NetflixNav />
            <NetflixVideo />
{/* Map over categories array - reuse component */}
            {netflixCategories.map(idx => 
                    <OnNetflixCat 
                        netflixCategories={idx}
                    />
                )
            }

        </main>
    )
}

export default NetflixHomePg
