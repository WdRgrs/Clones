import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { IconContext } from 'react-icons';
import { FcGoogle } from 'react-icons/fc'
import { SiNetflix } from "react-icons/si";
import netflixLogo from './netflix/netflix-logo.png'
import googleLogo from './google/google-logo.png'

function Home() {
    return (
        <div className='homepage'>
            <div className='homepage-title'>
                <h1>Wade's Wild and Wonderful Clones</h1>
            </div>

            <IconContext.Provider value={{size: '1.5em'}}>
                <div className='homepage-clones-container'>
                    <div className='homepage-clone-holder'>
                        <div className='homepage-clone-card'>
                            <div className='homepage-clone-card-front'>
                                <img src={netflixLogo} id="netflix-logo"></img>
                            </div>

                                <div className='homepage-clone-card-back'>
                                    <Link to='netflix'>
                                        <div id='homepage-back-info'>
                                            <SiNetflix 
                                                color='red'
                                                size='7em'
                                            />
                                            <h2>Netflix</h2>
                                            <p>A clone of netflix that drops the user in at the account selection screen - click 'You' to navigate farther into the page.</p>
                                        </div>
                                    </Link>
                                </div>
                        </div>
                    </div>

                    <div className='homepage-clone-holder'>
                        <div className='homepage-clone-card'>
                            <div className='homepage-clone-card-front'>
                                <img src={googleLogo} id="google-logo"></img>
                            </div>

                            <div className='homepage-clone-card-back'>
                                <Link to='google'>
                                    <div id='homepage-back-info'>
                                        <FcGoogle 
                                            size='7em'
                                        />
                                        <h2>Google</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='homepage-clone-holder'>
                        <div className='homepage-clone-card'>
                            <div className='homepage-clone-card-front'>
                                <SiNetflix />
                            </div>

                            <div className='homepage-clone-card-back'>
                                <Link to='midwestern'>Midwestern</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default Home
