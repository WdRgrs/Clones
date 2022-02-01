import React from 'react';
import { SiNetflix } from "react-icons/si";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoPlay } from "react-icons/io5";

// import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

function NetflixVideoTitle() {
    return (
        <div>
            <div id='netflix-main-video-title'>
                <div id='netflix-title-series'>
                    <SiNetflix 
                        color='red'
                        size='1.2vw'
                    />
                    <span>{'SERIES'}</span>
                </div>
                <h2 id='deadstock-main-title'><span>C</span>obra <span>K</span>ai</h2>
                {/* UPDATE LOGIC TO HAVE SHOW INFORMATION ON FINISHED PLAYING */}
                {/* <p id='netflix-main-title-about'>
                    Decades after the tournament that changed their lives, the rivalry between Johnny and Daniel reignites in this sequel to the "Karate Kid" films.
                </p> */}
                <section className='netflix-main-title-section' id='netflix-main-title-buttons-container'>
                    <button className='main-title-button' id='main-title-play'>
                    <IoPlay size='2em' />
                    <span>Play</span>
                    </button>
                    <button className='main-title-button' id='main-title-about'>
                    <AiOutlineInfoCircle size='2.35rem' /> 
                    <span>More Info</span>
                    </button>
                </section>
            </div>        
        </div>
    )
}

export default NetflixVideoTitle;
