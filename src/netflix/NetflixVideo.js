import React, {useState} from 'react';
import ReactPlayer from 'react-player'
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import NetflixVideoTitle from './NetflixVideoTitle';
import bkImg from './images/background_CK.jpg'


function NetflixVideo() {
    const [vol, setVol] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState(0);
    
    let videoUrl = 'https://vimeo.com/655516741'

    function handleDone() {
        setBackgroundImage(1)
    }

    function handleMute() {
        vol ? setVol(0) : setVol(1)
    }
    return (
        <div>
            <div className='video-background'>
                <ReactPlayer
                    url={videoUrl}
                    playing={true}
                    controls={false}
                    volume={vol}
                    width='100vw'
                    height='100vh'
                    onEnded={()=>handleDone()}
                />
            </div>
            <img src={bkImg} style={{opacity: backgroundImage}} id="background-image" alt=''></img>
            {/* <div className='video-background' style={{opacity: backgroundImage}}>
            </div> */}

            {/*blocker div - maybe change to kobra kai info */}
            <div id='blocker'>
                {/* <NetflixVideoCard /> */}
                <NetflixVideoTitle />
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
                        opacity={vol ? 0 : 1}
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

export default NetflixVideo;
