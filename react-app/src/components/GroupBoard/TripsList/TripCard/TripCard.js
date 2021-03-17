import React from 'react'

import './TripCard.css'

const TripCard = ({ trip }) => {
    return (
        <div className="member_card__container">
            <div className='member_card__top'>
                <img id='member-image' src={trip.profile_image_url} alt='text' />
            </div>
            <div className='member_card__bottom'>
                
            </div>
        </div>
    )
}

export default TripCard