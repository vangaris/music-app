import React from 'react'
import './collection-item.style.scss'
import CustomButton from './../custom-button/custom-button.component'

const CollectionItem = ({ item }) => {
    const { title, imageCover, artist, } = item
    return (
        <div className="collection-item">
            <div className='image' style={{
                backgroundImage: `url(${imageCover})`
            }} />
            <div className="collection-footer">
                <span className='name'> {title}</span>
                <span className="artist"> {artist}</span>
            </div>
            <CustomButton> play </CustomButton>
        </div>
    )
}


export default CollectionItem