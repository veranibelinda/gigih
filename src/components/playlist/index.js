import React from 'react'
import Song from '../songs'
import Button from '../button'
import data from '../../data'

const Playlist = () => {
    return (
        <div class="song-wrapper">
            <Song img={data.album.images[0].url} title={data.name} artist={data.artists[0].name} album={data.album.name}/>
            <Button label="Like"/>
        </div>
    )
}

export default Playlist