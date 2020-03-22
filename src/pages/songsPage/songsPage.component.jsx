import React from 'react'

import { Route } from 'react-router-dom'
import Collection from '../collection/collection.component'
import BackArrow from '../../components/backArrow/backArrow'
import './shopPage.style.scss'

const ShopPage = ({ match }) => (

    <div className='shop-page'>
        <BackArrow />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
)


export default ShopPage