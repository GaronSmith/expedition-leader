import React, { useState } from 'react'
import {Multiselect} from 'multiselect-react-dropdown'

import './AddMemberForm'
import { useDispatch, useSelector } from 'react-redux'

const AddMemberForm = () => {
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
                setOptions(results)
            }  catch (err){

            }
        }
    }

    const onSelect = (selectedList, selectedItems) => {
        dispatch
    }
    
    return (
        <div className='form__content-container'>
            <h3 className='form__title'>Add new group members {project.name}</h3>
            <div className='form__select-members'>
                <Multiselect
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    onSearch={searchInput}
                    selectedValues={groupMembers}
                    displayValue='username'
                />
            </div>
        </div>

    )
}

export default AddMemberForm