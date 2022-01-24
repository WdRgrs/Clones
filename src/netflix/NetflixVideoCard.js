import React from 'react';

function NetflixVideoCard() {
  return (
    <div>
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
    </div>);
}

export default NetflixVideoCard;
