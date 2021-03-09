import GearForm from './GearForm'

import React, { useState } from 'react'
import { Modal } from '../../../context/Modal'


function GearFormModal({ group }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='modal__button' onClick={() => setShowModal(true)}>
                Add Item 
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <GearForm group={group}/>
                </Modal>
            )}
        </>
    )
}


export default GearFormModal