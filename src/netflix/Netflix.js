import React from 'react'
import { Link } from 'react-router-dom'
import './netflix.css'
import { FaPlusCircle } from "react-icons/fa";
import profile1 from './images/profile1.png'
import profile2 from './images/profile2.png'
import profile3 from './images/profile3.png'
import NetflixNav from './NetflixNav';

function Netflix() {

    const badPathClick = () => {
        alert("Sorry friend, this is just a mock website. To progress to the next stage click on the 'You' profile, or click 'Wade' to return to my portfolio page.  Thanks!")
    }

    return (
        <div className='netflix-landing'>
            <NetflixNav />
            <div className='netflix-landing-container'>
                <h1 className='netflix-landing-header'>
                    Who's watching?
                </h1>

                <div className='netflix-profile-container'>
                    <Link to='/netflix/browse'>
                        <div className='netflix-profile-card'>
                            <img src={profile1} className='netflix-profile-img' alt='first profile'></img>
                            <p>You</p>
                        </div>
                    </Link>
                    
                    <a href='https://wdrgrs.github.io/profile' target='_blank' rel='noreferrer'>
                        <div className='netflix-profile-card'>
                            <img src={profile2} className='netflix-profile-img' alt='first profile'></img>
                            <p>Wade</p>
                        </div>
                    </a>

                    <div className='netflix-profile-card' onClick={badPathClick}>
                        <img src={profile3} className='netflix-profile-img' alt='first profile'></img>
                        <p>Kids</p>
                    </div>

                    <div className='netflix-profile-card' onClick={badPathClick}>
                        <div className='netflix-profile-img'>
                            <FaPlusCircle
                                size='6vw' 
                                color='grey'
                            />
                        </div>
                        <p>Add Profile</p>
                    </div>
                </div>
            </div>

            <div 
                id='netflix-manage-profiles-btn'
                onClick={badPathClick}
            >
                Manage Profiles
            </div>

        </div>
    )
}

export default Netflix
