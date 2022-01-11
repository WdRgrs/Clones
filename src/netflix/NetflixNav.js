import React from 'react'
import netflixlogo from './images/netflix-logo.png'

function NetflixNav() {

    function loggedIn() {
        const { pathname } = window.location;
        if (pathname.includes('browse')) {
            return true;
        }
        return false;
    }

    function handleLoggedIn() {
        return (
            <nav>
                <div className='netflix-nav-icons' id='netflix-nav-left'>
                    <div>Home</div>
                    <div>TV Shows</div>
                    <div>Movies</div>
                    <div>New & Popular</div>
                    <div>My List</div>
                    <div>Audio & Subtitles</div>
                </div>
                <div className='netflix-nav-icons' id='netflix-nav-right'>
                    <div>Search</div>
                    <div>Kids</div>
                    <div>DVD</div>
                    <div>Bell</div>
                    <div>Dropdown Menu</div>
                </div>
            </nav>
        )
    }
    return (
        <div className='netflix-landing-nav'>
            <a href='http://www.netflix.com' target='_blank' rel='noreferrer'>
                <img src={netflixlogo} id='netflix-landing-logo' alt='no'></img>
            </a>
            {(loggedIn()) ? handleLoggedIn() : null}
        </div>
    )
}

export default NetflixNav
