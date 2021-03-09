import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {getCurrentGroups} from '../../../store/groups'

import './GroupsList.css'

const GroupsList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentGroups())
    },[dispatch])
    return (
        <div className='groupslist__container'>

        </div>

    )
}

export default GroupsList