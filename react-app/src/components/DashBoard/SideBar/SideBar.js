import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import "./SideBar.css"

const SideBar = () => {

    return (
        <div className="sidebar__container">
            <ul>
                <li>
                    <NavLink className="sidebar_link" to='/'>
                        <FontAwesomeIcon icon={faBoxOpen} />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar