import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import './GearGroup.css'

const GearGroup = ({group, items}) => {

    return (
            <Collapsible trigger={`${group.name} ()`}>
              <div className='inner__content'>
                  <p>{items[0].name}</p>
              </div>
              <div className='inner__content'>
                <button className='add-gear'><FontAwesomeIcon icon={faPlusSquare}/></button>
              </div>
            </Collapsible>
        
    )
}

export default GearGroup