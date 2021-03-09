import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faUserFriends, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import GearBox from "../GearBox"
import "./SideBar.css"
import GroupsList from '../GroupsList'

const SideBar = ({setView}) => {
    const gearBoxOnClick =(e) =>{
        e.preventDefault()

        setView(
            <div className='main_container'>
                <GearBox />
            </div>
        )
    }
    const tripOnClick =(e) =>{
        e.preventDefault()

        setView(
            <div className='main_container'>
                <h1> this is a test</h1>
            </div>
        )
    }

    const groupOnClick = (e) => {
        e.preventDefault()

        setView(
            <div className='main_container'>
                <GroupsList />
            </div>
        )
    }

    return (
        <div className="sidebar__container">
            <ul>
                <li>
                    <button className="sidebar_link" to='/dash' onClick={gearBoxOnClick}>
                        <p><span><FontAwesomeIcon icon={faBoxOpen} /></span> Gear Box</p>
                    </button>
                </li>
                <li>
                    <button className="sidebar_link" to='/dash' onClick={groupOnClick}>
                        <p><span><FontAwesomeIcon icon={faUserFriends} /></span> Groups</p>
                    </button>
                </li>
                <li>
                    <button className="sidebar_link" to='/dash' onClick={tripOnClick}>
                        <p><span><FontAwesomeIcon icon={faCalendarAlt} /></span> Trip</p>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SideBar