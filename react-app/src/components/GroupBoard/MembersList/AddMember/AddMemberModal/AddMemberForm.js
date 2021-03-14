import React, { useState } from 'react'
import {Multiselect} from 'multiselect-react-dropdown'
import { useParams } from 'react-router'

import './AddMemberForm'
import { useDispatch, useSelector } from 'react-redux'
import { addGroupMember, removeGroupMember } from '../../../../../store/groups'


const AddMemberForm = () => {
    const {groupId} = useParams()
    const [options, setOptions] = useState([])
    const dispatch = useDispatch()
    
    const groupMembers = useSelector(state => Object.values(state.groups.groupMembers).map(el => {
        return {id:el.id, name: el.first_name+ " " + el.last_name}
    }))

    const searchInput = async (value) => {
        if(value.length){
            const body = {value}
            try {
                const res = await fetch('/api/users/search', {
                    method:'POST',
                    body:JSON.stringify(body)
                })
                const results = await res.json()
                console.log(results)
                setOptions(results.data.map(el =>{
                    return {id:el.id, name: `${el.first_name} ${el.last_name}`}
                }))
            }  catch (err){

            }
        }
    }

    const onSelect = (selectedList, selectedItem) => {
        dispatch(addGroupMember(groupId, selectedItem.id))
    }

    const onRemove = (selectedList, selectedItem) => {
        dispatch(removeGroupMember(groupId, selectedItem.id))
    }
    
    return (
        <div className='form__content-container'>
            <h3 className='form__title'>Add new group members</h3>
            <div className='form__select-members'>
                <Multiselect
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    onSearch={searchInput}
                    selectedValues={groupMembers}
                    displayValue='name'
                />
            </div>
        </div>

    )
}

export default AddMemberForm