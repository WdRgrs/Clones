import React from 'react'
import './netflix.module.css'
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
            <nav className='netflix-home-nav'>
                <div className='netflix-nav-icons' id='netflix-nav-left'>
                    <div className='netflix-nav-left-icons' id='home'>Home</div>
                    <div className='netflix-nav-left-icons'>TV Shows</div>
                    <div className='netflix-nav-left-icons'>Movies</div>
                    <div className='netflix-nav-left-icons'>New & Popular</div>
                    <div className='netflix-nav-left-icons'>My List</div>
                    <div className='netflix-nav-left-icons'>Audio & Subtitles</div>
                </div>
                <div className='netflix-nav-icons' id='netflix-nav-right'>
                    <div className='netflix-nav-right-icons'>Search</div>
                    <div className='netflix-nav-right-icons'>Kids</div>
                    <div className='netflix-nav-right-icons'>DVD</div>
                    <div className='netflix-nav-right-icons'>Bell</div>
                    <div className='netflix-nav-right-icons'>Dropdown Menu</div>
                </div>
            </nav>
        )
    }
    return (
        <header className='netflix-landing-nav'>
            <a href='http://www.netflix.com' target='_blank' rel='noreferrer'>
                <img src={netflixlogo} id='netflix-landing-logo' alt='no'></img>
            </a>
            {(loggedIn()) ? handleLoggedIn() : null}
        </header>
    )
}

export default NetflixNav
