import React from 'react';
import ReactPlayer from 'react-player'

import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

function NetflixVideoCard({showInfo, setShowInfo}) {
    // onclick set condition // update props // modal element
    if (!showInfo){
        return null;
    }

    function handleClose() {
        setShowInfo(false)
    }
    return (
        <div id='netflix-card-background'>
            <div id='netflix-card'>

                <div className='video-background-card'>
                    <ReactPlayer
                        id='react-player'
                        url={'https://www.youtube.com/watch?v=16jTAS9Phoc'}
                        playing={true}
                        controls={false}
                        volume={0}
                        width='1000px'
                        height='565px'
                        config={{
                            youtube: {
                            playerVars: { showinfo: 0 }
                            }
                        }}
                        // onEnded={()=>handleDone()}
                    />
                </div>

                <div id='netflix-card-info'>
                    <div id='netflix-card-close-btn'
                        onClick={()=>handleClose()}
                    >
                        {'+'}
                    </div>

                    <h2 id='deadstock-title'><span>C</span>obra <span>K</span>ai</h2>
                    <section className='netflix-title-section' id='netflix-title-info'>
                        <div>New</div>
                        <div>2020</div>
                        <div id='netflix-rating'>TV-14</div>
                        <div>4 Seasons</div>
                        {/* <div id='netflix-audio-description'> */}
                            <span className="iconify" data-icon="fa:audio-description" data-width="40"></span>
                        {/* </div> */}
                    </section>
                    <p id='netflix-title-about'>
                        Decades after the tournament that changed their lives, the rivalry between Johnny and Daniel reignites in this sequel to the "Karate Kid" films.
                    </p>
                    <section className='netflix-title-section' id='netflix-title-buttons'>
                        <button>Play</button>
                        <button>+ My List</button>
                        <BsHandThumbsUp
                            size='1.7em'
                            style={{
                                border: '1px solid white',
                                borderRadius: '50%',
                                padding: '.5em',
                                margin: '0 .5em'
                            }}
                        />
                        <BsHandThumbsDown 
                            size='1.7em'
                            style={{
                                border: '1px solid white',
                                borderRadius: '50%',
                                padding: '.5em'
                            }}
                        />

                    </section>
                    <section className='netflix-title-section' id='netflix-title-details'>
                        <div>
                            <h3>Starring:</h3>
                            <p>Ralph Macchio, William Zabka</p>
                        </div>
                        <div>
                            <h3>Genres:</h3>
                            <p>TV Dramas</p>
                        </div>
                        <div>
                            <h3>This show is:</h3>
                            <p>Heartfelt, Exciting</p>
                        </div>
                    </section>
                    <section className='netflix-title-section' id='netflix-title-details'>
                        <div>
                            <h3>Starring:</h3>
                            <p>Ralph Macchio, William Zabka</p>
                        </div>
                        <div>
                            <h3>Genres:</h3>
                            <p>TV Dramas</p>
                        </div>
                        <div>
                            <h3>This show is:</h3>
                            <p>Heartfelt, Exciting</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default NetflixVideoCard;
