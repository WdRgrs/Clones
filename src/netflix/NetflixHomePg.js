import React, {useState} from 'react'
import './netflix.css'
// import NetflixBox from './NetflixBox'
import NetflixNav from './NetflixNav'
import NetflixVideo from './NetflixVideo'
import NetflixVideoCard from './NetflixVideoCard'
import OnNetflixCat from './OnNetflixCat'

function NetflixHomePg() {
    const [showInfo, setShowInfo] = useState(false)
    
    // interpolation for random videos on refresh
    let netflixCategories = ['Only on Netflix', 'Trending Now', 'New This Week', 'Award-Winning Bingeworthy TV Shows']

    return (
        <main id='netflix-main-container'>
            <NetflixNav />
            
            <NetflixVideo 
                showInfo={showInfo}
                setShowInfo={setShowInfo}
            />

            <NetflixVideoCard 
                showInfo={showInfo}
                setShowInfo={setShowInfo}
            />
    
{/* Map over categories array - reuse component */}
            {netflixCategories.map(idx => 
                <OnNetflixCat 
                    netflixCategories={idx}
                />
            )}

        </main>
    )
}

export default NetflixHomePg
