import React  from 'react'
import { useSelector } from 'react-redux'

import './GroupsList.css'

const GroupsList = () => {
    const status = useSelector(state => state.groups.myGroups)
    const accepted = useSelector(state => {
        return state.session.user.groups.filter(el => {
            return status['accepted'].indexOf(el.id) != -1
        })
    })
 
    return (
        <div className='groupslist__container'>

        </div>

    )
}

export default GroupsList