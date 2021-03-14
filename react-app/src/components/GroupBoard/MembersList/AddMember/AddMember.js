import React from 'react'

import './AddMember.css'
import AddMemberModal from './AddMemberModal'

const AddMember = () => {
    return (
        <div className="member_card__container">
            <div className='member_card__top'>
                <p id='member-email'>Invite new group member</p>
            </div>
            <div className='member_card__bottom'>
                <AddMemberModal />
            </div>
        </div>
    )
}

export default AddMember