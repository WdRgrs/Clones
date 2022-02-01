import React, {useState} from 'react';
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import NetflixVideoTitle from './NetflixVideoTitle';

function NetflixMuteBtn({vol, setVol}) {

    function handleMute() {
        vol ? setVol(0) : setVol(1)
    }
    return (
        <div>
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

export default NetflixMuteBtn;
