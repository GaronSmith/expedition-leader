import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


import './MembersList.css'

const MembersList = () => {
    const members = useSelector(state => )

    const [memberRows, setMemberRows] = useState([])
    useEffect(() => {
        if (accepted) {
            const rows = [...Array(Math.ceil(accepted.length / 4))];
            const memberArr = rows.map((row, idx) => accepted.slice(idx * 4, idx * 4 + 4));
            setMemberRows(memberArr)
            
        }
    }, [])

    return (
        <div className='memberslist__container'>
            {memberRows && memberRows.map((row, idx) => {
                return <div className="tag__row" key={idx}>
                    {row.map(group => <GroupCard key={idx} group={group} />)}
                </div>
            })}

        </div>

    )
}

export default MembersList