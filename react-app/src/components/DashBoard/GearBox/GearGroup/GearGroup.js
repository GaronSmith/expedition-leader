import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import './GearGroup.css'
import GearItem from './GearItem'
import GearFormModal from '../../GearFormModal'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const GearGroup = ({group,  amt}) => {
    const gear = useSelector(state => state.gear.items[group.id])
    const [items, setItems] = useState([])

    useEffect(() => {
      setItems(gear)
      console.log(items)
    },[gear])
    return (
            <Collapsible trigger={`${group.name} (${amt})`}>
              <div className='inner__content'>
                  {
                  items.map(item => {
                    return <GearItem key={item.id} item={item}/>
                  })}
              </div>
              <div className='inner__content'>
                <GearFormModal group={group}/>
              </div>
            </Collapsible>
        
    )
}

export default GearGroup