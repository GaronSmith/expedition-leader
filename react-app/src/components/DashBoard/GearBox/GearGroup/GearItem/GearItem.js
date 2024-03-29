import React from 'react'
import Collapsible from 'react-collapsible'
import { useDispatch } from 'react-redux'
import { deleteGearItem } from '../../../../../store/gear'

import './GearItem.css'

const GearItem = ({item}) => {
    const dispatch = useDispatch()
    
    const onDelete = (e) => {
        e.preventDefault()
        dispatch(deleteGearItem(item.category_id, item.id))
    }
    return (
        <div className='gear-item__container'>
            <Collapsible classParentString='item' trigger={`${item.name}`}>
                <div className='item__container'>
                    <div className='item__left'>
                        <img className='item__image' src={item.image_url} alt='img' />
                    </div>
                    <div className='item__middle'>
                        <ul className='item__list'>
                            <li className='item__spec'>
                                <span className='item__label'> Manufacturer:</span> {item.manufacturer ? item.manufacturer : "information not provided"}
                            </li>
                            <li className='item__spec'>
                                <span className='item__label'> Cost per:</span> {item.cost ? `$${item.cost/100}` : "information not provided"}
                            </li>
                            <li className='item__spec'>
                                <span className='item__label'> Quantity:</span> {item.quantity ? item.quantity : "information not provided"}
                            </li>
                            <li className='item__spec'>
                                <span className='item__label'> Date acquired:</span> {item.purchase_date ? item.purchase_date.split(' ').slice(0, 4).join(' '): "information not provided"}
                            </li>
                            <li className='item__spec'>
                                <span className='item__label'> Status:</span> {item.status ? item.status : "information not provided"}
                            </li>
                        </ul>
                    </div>
                    <div className='item__right'>
                        <button className="delete" onClick={onDelete}> Delete </button>
                    </div>
                </div>
            </Collapsible>
        </div>
    )
}

export default GearItem