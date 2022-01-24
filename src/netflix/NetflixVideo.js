import React, {useState} from 'react';
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";


function NetflixVideo() {
    const [vol, setVol] = useState(1);

    function handleMute() {
        vol ? setVol(0) : setVol(1)
    }
    return (
        <div>
            {/* <iframe id='video' src="https://www.youtube.com/embed/5MC1dFvCmC8?autoplay=1&rel=1&controls=0&iv_load_policy=3&modestbranding=1&loop=1" title='cobra-kai-background'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            /> */}
            <iframe id='video' src={`https://player.vimeo.com/video/655516741?h=a72147ab90&autoplay=1&muted=${vol}&loop=0&title=0&byline=0&portrait=0`} title='cobra-kai-background'
                // allow="autoplay; fullscreen; picture-in-picture" 
                allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            {/*blocker div - maybe change to kobra kai info */}
            <div id='blocker'>
                <div id='netflix-main-video-title'>
                    <h2 id='deadstock-title'><span>C</span>obra <span>K</span>ai</h2>
                    <section id='netflix-title-info'>
                        <div>New</div>
                        <div>2020</div>
                        <div>TV-14</div>
                        <div>4 Seasons</div>
                    </section>
                    <p id='netflix-title-about'>a;lkjdf a;lkjsdf ;lkajsdf ;lkajd</p>
                    <section id='netflix-title-buttons'>
                        <button>Play</button>
                        <button>+ My List</button>
                        <div>Like</div>
                        <div>Dislike</div>
                    </section>
                    <section id='netflix-title-details'>
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
                <div onClick={()=> handleMute()}>
                <div id='netflix-volume-button'>
                    <BiVolumeFull 
                        color='White'
                        size='2rem'
                    />
                </div>
                <div id='netflix-volume-button'>
                    <BiVolumeMute 
                        color='White'
                        size='2rem'
                        opacity={vol}
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

export default NetflixVideo;
