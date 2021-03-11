import React, { useEffect, useState }  from 'react'
import { useSelector } from 'react-redux'
import GroupCard from './GroupCard'

import './GroupsList.css'

const GroupsList = () => {
    const status = useSelector(state => state.groups.myGroups)
    const accepted = useSelector(state => {
        return state.session.user.groups.filter(el => {
            return status['accepted'].indexOf(el.id) !== -1
        })
    })

    const [groupRows, setGroupRows] = useState([])
    useEffect(() => {
        if(accepted){
            const rows = [...Array(Math.ceil(accepted.length / 4))];
            const groupArr = rows.map((row, idx) => accepted.slice(idx * 4, idx * 4 + 4));
            setGroupRows(groupArr)
            console.log(groupArr)
        }
    },[])
 
    return (
        <div className='groupslist__container'>
            {groupRows && groupRows.map((row, idx) => {
                return <div className="tag__row" key={idx}>
                    {row.map(group => <GroupCard key={idx} group={group} />)}
                    </div>
            })}
            
        </div>

    )
}

export default GroupsList