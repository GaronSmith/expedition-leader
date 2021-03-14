import React from 'react'
import { Link } from 'react-router-dom'

import './GroupCard.css'

const GroupCard = ({group}) => {
    return (
        <div className="group_card__container">
            <div className='group_card__top'>
                <img id='group-image' src={group.image_url} alt='text'/>
            </div>
            <div className='group_card__bottom'>
                <Link id='group-name' to={`/dashboard/group/${group.id}`}>{group.name}</Link>
            </div>
        </div>
    )
}

export default GroupCard