import React from 'react'
import NetflixNav from './NetflixNav'

function NetflixBrowse({loggedIn, setLoggedIn}) {
    return (
        <main id='netflix-main-container'>
            <NetflixNav 
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
            />
            Netflix Browsing Page!
            <button onClick={()=>console.log(loggedIn)}>TTT</button>
        </main>
    )
}

export default NetflixBrowse
