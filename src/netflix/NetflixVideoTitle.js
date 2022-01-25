import React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoPlay } from "react-icons/io5";

// IoPlay
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import NetflixVideo from './NetflixVideo';

function NetflixVideoTitle() {
    return (

        <div>
            <div id='netflix-main-video-title'>
                <div>N SERIES</div>
                <h2 id='deadstock-main-title'><span>C</span>obra <span>K</span>ai</h2>
                {/* <p id='netflix-main-title-about'>
                    Decades after the tournament that changed their lives, the rivalry between Johnny and Daniel reignites in this sequel to the "Karate Kid" films.
                </p> */}
                <section className='netflix-main-title-section' id='netflix-main-title-buttons-container'>
                    <button className='main-title-button' id='main-title-play'>
                    <IoPlay size='2.5rem' />
                    Play
                    </button>
                    <button className='main-title-button' id='main-title-about'>
                    <AiOutlineInfoCircle size='2.3rem' /> 
                    More Info</button>
                </section>
            </div>        
        </div>
    )
}

export default NetflixVideoTitle;
