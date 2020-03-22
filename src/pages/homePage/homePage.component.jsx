import React from 'react'
import './homePage.style.scss'
import Directory from '../../components/directory/directory.component'



const HomePage = () => {
    return (
        <div className='home-page'>
            <h2> Music App </h2>
            <Directory />
        </div>
    )

}

export default HomePage