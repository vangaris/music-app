import React from 'react'
import './backArrow.style.scss'

import { Link } from 'react-router-dom'

const BackToAlbums = () => (
    <div className='back'>

        <Link className='option' to='/'>
            <div> &#10094; back </div>
        </Link>
    </div>
);



export default BackToAlbums;

