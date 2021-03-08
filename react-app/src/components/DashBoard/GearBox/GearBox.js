import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCategories, getGearItems } from '../../../store/gear'

import './GearBox.css'
import GearGroup from './GearGroup'

const GearBox = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.gear.categories)
    const user = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(getCategories())
        console.log('test')
        dispatch(getGearItems(user.id))
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