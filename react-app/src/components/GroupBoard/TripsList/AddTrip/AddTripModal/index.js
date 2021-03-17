import React, { useState } from 'react';
import { Modal } from '../../../../../context/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

import AddMemberForm from './AddMemberForm';

const AddMemberModal = ({ project }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    return (
        <>
            <button
                className='project-tile__add-users'
                onClick={() => { setShowModal(true) }}>
                <FontAwesomeIcon icon={faUsers} />
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddMemberForm handleClose={handleClose} />
                </Modal>
            )}
        </>
    )
}

export default AddMemberModal
