import GearForm from './GearForm'

import React, { useState } from 'react'
import { Modal } from '../../../context/Modal'


function GearFormModal({ setAuthenticated, authenticated }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='navbar__button' onClick={() => setShowModal(true)}>
                Add Item 
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <GearForm />
                </Modal>
            )}
        </>
    )
}


export default GearFormModal