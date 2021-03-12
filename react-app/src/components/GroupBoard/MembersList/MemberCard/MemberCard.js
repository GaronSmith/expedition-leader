import React from 'react'

import './MemberCard.css'

const MemberCard = ({ member }) => {
    return (
        <div className="member_card__container">
            <div className='member_card__top'>
                <img id='member-image' src={member.image_url} alt='text' />
            </div>
            <div className='member_card__bottom'>
                <p id='member-name'>{member.name}</p>
                <p id='member-email'>{member.email}</p>
            </div>
        </div>
    )
}

export default MemberCard