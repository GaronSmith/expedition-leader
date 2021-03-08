import React from 'react'
import Collapsible from 'react-collapsible'

import './GearItem.css'

const GearItem = ({item}) => {
    
    return (
        <div className='gear-item__container'>
            <Collapsible classParentString='test' trigger='  test'>
                <h1> hello</h1>
            </Collapsible>
        </div>
    )
}

export default GearItem