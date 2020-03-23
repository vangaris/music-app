import React from 'react'
import './collection-item.style.scss'
import { connect } from 'react-redux'
import { playSong } from '../../redux/audio/audio.action'

import CustomButton from './../custom-button/custom-button.component'

const CollectionItem = ({ item, playSong }) => {
    const { title, imageCover, artist, song } = item
    return (
        <div className="collection-item">
            <div className='image' style={{
                backgroundImage: `url(${imageCover})`
            }} />
            <div className="collection-footer">
                <span className='name'> {title}</span>
                <span className="artist"> {artist}</span>
            </div>
            <audio controls>
                <source src={song} type="audio/mp3"></source>
            </audio>

            <CustomButton onClick={() => playSong(song)}> &#9654; </CustomButton>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    playSong: item => dispatch(playSong(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem)