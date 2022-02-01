import React from 'react';
import { VscMute, VscUnmute } from "react-icons/vsc";
import { MdRefresh } from "react-icons/md";



function NetflixMuteBtn({vol, setVol, playingState, setPlayingState, setVideoUrl, setBackgroundImage}) {
    function handleRefresh() {
        setVideoUrl('https://vimeo.com/655516741');
        setPlayingState(true);
        setBackgroundImage(0);
    }

    function handleMute() {
        vol ? setVol(0) : setVol(1)
    }
    return (
        <div>
            <div id='blocker'>
                <div >
                    {vol ? 
                        <div id='netflix-volume-containter'>
                                {!playingState ? 
                                    <div id='netflix-volume-button' onClick={()=> handleRefresh()}>
                                        <MdRefresh 
                                            color='white'
                                            size='2em'
                                        />
                                    </div>
                                    : <div id='netflix-volume-button' onClick={()=> handleMute()}>
                                        <VscUnmute 
                                            color='White'
                                            size='1.5rem'
                                        />
                                    </div>}
                                
                            <div id='netflix-button-rating'>TV-14</div>
                        </div>
                        : <div id='netflix-volume-containter'>
                            {!playingState ? 
                                <div id='netflix-volume-button' onClick={()=> handleRefresh()}>
                                    <MdRefresh 
                                        color='white'
                                        size='2em'
                                    />
                                </div> 
                                : <div id='netflix-volume-button' onClick={()=> handleMute()}>
                                    <VscMute 
                                        color='White'
                                        size='1.5rem'
                                    />
                                </div>}
                            <div id='netflix-button-rating'>TV-14</div>
                        </div> 
                    }
                </div>

            </div>
        </div>
    )
}

export default NetflixMuteBtn;
