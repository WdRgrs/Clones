import React from 'react';
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import NetflixVideo from './NetflixVideo';

function NetflixVideoTitle() {
    return (

        <div>
            <div id='netflix-main-video-title'>
                <h2 id='deadstock-title'><span>C</span>obra <span>K</span>ai</h2>
                <p id='netflix-title-about'>
                    Decades after the tournament that changed their lives, the rivalry between Johnny and Daniel reignites in this sequel to the "Karate Kid" films.
                </p>
                <section className='netflix-title-section' id='netflix-title-buttons'>
                    <button>Play</button>
                    <button>+ My List</button>
                </section>
            </div>        
        </div>
    )
}

export default NetflixVideoTitle;
