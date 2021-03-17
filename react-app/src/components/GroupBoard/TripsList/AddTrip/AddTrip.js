import React from 'react'

import './AddTrip.css'
import AddTripModal from './AddTripModal'

const AddTrip = () => {
    return (
        <div className="member_card__container">
            <div className='member_card__top'>
                <p id='member-email'>Create a new Trip</p>
            </div>
            <div className='member_card__bottom'>
                <AddTripModal />
            </div>
        </div>
    )
}

export default AddTrip