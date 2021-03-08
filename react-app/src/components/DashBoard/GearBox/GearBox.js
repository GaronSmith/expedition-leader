import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCategories } from '../../../store/gear'

import './GearBox.css'
import GearGroup from './GearGroup'

const GearBox = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.gear.categories)
    console.log(categories)
    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])
    return (
        <div className='gearbox__container'>
            {categories &&
                Object.values(categories).map(group => {
                    return <GearGroup group={group}/>
                })
            }

            
        </div>
    )
}

export default GearBox