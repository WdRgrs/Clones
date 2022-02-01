import React, {useState} from 'react';
import ReactPlayer from 'react-player'
import bkImg from './images/background_CK.jpg'
import NetflixMuteBtn from './NetflixMuteBtn';


function NetflixVideo() {
    const [vol, setVol] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState(0);
    
    let videoUrl = 'https://vimeo.com/655516741'

    function handleDone() {
        setBackgroundImage(1)
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
            <NetflixMuteBtn 
                vol={vol}
                setVol={setVol}
            />
        </div>
    )
}

export default NetflixVideo;
