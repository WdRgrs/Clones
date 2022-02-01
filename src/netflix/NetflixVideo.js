import React, {useState} from 'react';
import ReactPlayer from 'react-player'
import bkImg from './images/background_CK.jpg'
import NetflixMuteBtn from './NetflixMuteBtn';
import NetflixVideoTitle from './NetflixVideoTitle';


function NetflixVideo({showInfo, setShowInfo}) {
    const [vol, setVol] = useState(0);
    const [playingState, setPlayingState] = useState(true)
    const [backgroundImage, setBackgroundImage] = useState(0);
    const [videoUrl, setVideoUrl] = useState('https://vimeo.com/655516741')

    function handleDone() {
        setBackgroundImage(1)
        setPlayingState(false)
    }

    return (
        <div>
            <div className='video-background'>
                <ReactPlayer
                    url={videoUrl}
                    playing={playingState}
                    controls={false}
                    volume={vol}
                    width='100vw'
                    height='115vh'
                    onEnded={()=>handleDone()}
                />
            </div>
            <img src={bkImg} style={{opacity: backgroundImage}} id="background-image" alt=''></img>

            <NetflixVideoTitle 
                playingState={playingState}
                showInfo={showInfo}
                setShowInfo={setShowInfo}
            />

            <NetflixMuteBtn 
                vol={vol}
                setVol={setVol}
                playingState={playingState}
                setPlayingState={setPlayingState}
                setVideoUrl={setVideoUrl}
                setBackgroundImage={setBackgroundImage}
            />
        </div>
    )
}

export default NetflixVideo;
