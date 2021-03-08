import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import './GearGroup.css'
import GearItem from './GearItem'

const GearGroup = ({group, items, amt}) => {

    return (
            <Collapsible trigger={`${group.name} (${amt})`}>
              <div className='inner__content'>
                  {
                  items.map(item => {
                    return <GearItem key={item.id}item={item}/>
                  })}
              </div>
              <div className='inner__content'>
                <button className='add-gear'><FontAwesomeIcon icon={faPlusSquare}/></button>
              </div>
            </Collapsible>
        
    )
}

export default GearGroup