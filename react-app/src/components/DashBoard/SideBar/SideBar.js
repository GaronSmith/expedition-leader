import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icon'
import "./SideBar.css"

const SideBar = () => {

    return (
        <div className="sidebar__container">
            <ul>
                <li>
                    <Navlink >
                        <FontAwesomeIcon icon={faBoxOpen} />
                    </Navlink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar