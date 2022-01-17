import React from 'react'
import NetflixBox from './NetflixBox'

function OnNetflixCat({netflixCategories}) {
    return (
        <div id='on-netflix-container'>
            <div id='netflix-category'>
                {netflixCategories}
                <div id='boxes-container'>
                    {/* Map of shows */}
                    <NetflixBox />
                </div>
            </div>
        </div>
    )
}

export default OnNetflixCat
