import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
import "./SideBarGroup.css"
import MembersList from '../MembersList/MembersList'

const SideBarGroup = ({ setView }) => {
    const usersOnClick = (e) => {
        e.preventDefault()

        setView(
            <div className='main_container'>
                <MembersList />
            </div>
        )
    }
    const tripOnClick = (e) => {
        e.preventDefault()

        setView(
            <div className='main_container'>
                <h1> this is a test</h1>
            </div>
        )
    }

    return (
        <div className="sidebar__container">
            <ul>
                <li>
                    <button className="sidebar_link" to='/dash' onClick={usersOnClick}>
                        <p><span><FontAwesomeIcon icon={faUsers} /></span> Members</p>
                    </button>
                </li>
                <li>
                    <button className="sidebar_link" to='/dash' onClick={tripOnClick}>
                        <p><span><FontAwesomeIcon icon={faCalendarAlt} /></span> Trips</p>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SideBarGroup