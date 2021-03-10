import React from 'react'

import './GroupCard.css'

const GroupCard = ({group}) => {

    return (
        <div className="group_card__container">
            <div className='group_card__top'>
                <div className='group__picture' style={{backgroundImage: `url(${group.image_url})`}} />
            </div>
            <div className='group_card__bottom'>
                <p id='group-name'>{group.name}</p>
            </div>
        </div>
    )
}

export default GroupCard