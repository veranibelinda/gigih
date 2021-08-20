import React from 'react'

const Song = props => {
    return (
        <div id="track">
            <img src={props.img} alt={props.alt}/>
            <h3 id="track-title">{props.title}</h3>
            <p id="track-artist">{props.artist}</p>
            <p id="track-album">{props.album}</p>
        </div>
    );
}

export default Song