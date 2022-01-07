import React from 'react'
import netflixlogo from './netflix-logo.png'

function NetflixNav() {
    return (
        <div className='netflix-landing-nav'>
            <a href='http://www.netflix.com' target='_blank' rel='noreferrer'>
                <img src={netflixlogo} id='netflix-landing-logo' alt='no'></img>
            </a>
        </div>
    )
}

export default NetflixNav
