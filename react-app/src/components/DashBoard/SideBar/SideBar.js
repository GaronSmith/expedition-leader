import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import GearBox from "../GearBox"
import "./SideBar.css"

const SideBar = ({setView}) => {
    const gearBoxOnClick =(e) =>{
        e.preventDefault()

        setView(
        <div className='gearbox'>
            <GearBox />
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
            </ul>
        </div>
    )
}

export default SideBar