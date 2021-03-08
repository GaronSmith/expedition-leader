import React from 'react'
import { useSelector } from 'react-redux'

import "./DashBoard.css"
import GearBox from './GearBox'
import SideBar from './SideBar'

const DashBoard = () => {
    const user = useSelector(state => state.session.user)

    return (
        <div className="dashboard__container">
            <div>
                <SideBar />
            </div>
            <div className='gearbox'>
                <GearBox />
            </div>
        </div>

    )
}

export default DashBoard