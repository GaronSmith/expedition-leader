import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MemberCard from './MemberCard'


import './MembersList.css'

const MembersList = () => {
    const members = useSelector(state => Object.values(state.groups.groupMembers))

    const [memberRows, setMemberRows] = useState([])
    useEffect(() => {
        if (members) {
            const rows = [...Array(Math.ceil(members.length / 4))];
            const memberArr = rows.map((row, idx) => members.slice(idx * 4, idx * 4 + 4));
            setMemberRows(memberArr)
            
        }
    }, [])

    return (
        <div className='memberslist__container'>
            {memberRows && memberRows.map((row, idx) => {
                return <div className="tag__row" key={idx}>
                    {row.map(member => <MemberCard key={member.id} member={member} />)}
                </div>
            })}

        </div>

    )
}

export default MembersList