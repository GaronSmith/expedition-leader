import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getCategories } from '../../../store/gear'

import './GearBox.css'
import GearGroup from './GearGroup'

const GearBox = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])
    return (
        <div className='gearbox__container'>
            <GearGroup />
        </div>
    )
}

export default GearBox