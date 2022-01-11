import React from 'react'
import netflixlogo from './images/netflix-logo.png'

function NetflixNav({ loggedIn, setLoggedIn}) {

    function handleLoggedIn() {
        return (
            <nav>
                <div>Home</div>
                <div>TV Shows</div>
                <div>Movies</div>
                <div>New & Popular</div>
                <div>My List</div>
                <div>Audio & Subtitles</div>
            </nav>
        )
    }
    return (
        <div className='netflix-landing-nav'>
            <a href='http://www.netflix.com' target='_blank' rel='noreferrer'>
                <img src={netflixlogo} id='netflix-landing-logo' alt='no'></img>
            </a>
            {/* {(!loggedIn) ? null : handleLoggedIn()} */}
        </div>
    )
}

export default NetflixNav
