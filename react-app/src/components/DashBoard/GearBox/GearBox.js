import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCategories, getGearItems } from '../../../store/gear'

import './GearBox.css'
import GearGroup from './GearGroup'

const GearBox = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.gear.categories)
    const user = useSelector(state => state.session.user)
    const items = useSelector(state => state.gear.items)
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getGearItems(user.id))
    },[dispatch])

    return (
        <div className='gearbox__container'>
            {categories && items &&
                Object.values(categories).map(group => {
                    return <GearGroup group={group} items={items[group.id]}/>
                })
            }

            
        </div>
    )
}

export default GearBox