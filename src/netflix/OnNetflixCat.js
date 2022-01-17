import React from 'react'
import NetflixBox from './NetflixBox'

function OnNetflixCat() {
    let netflixCategories = ['Only on Netflix', 'Trending Now', 'New This Week', 'Award-Winning Bingeworthy TV Shows']
    return (
        <div id='netflix-category'>
            Netflix Category Title from array
            {netflixCategories[0]}
            <div>
                Map of shows
                <NetflixBox />
            </div>
        </div>
    )
}

export default OnNetflixCat
