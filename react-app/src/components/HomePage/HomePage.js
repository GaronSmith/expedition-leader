import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import './HomePage.css'

const HomePage = () => {
    const user = useSelector(state => state.session.user)

    return (
        <div className='homepage__container'>
        </div>
    )
}

export default HomePage