import React from 'react'
import { useSelector } from 'react-redux'

import "./DashBoard.css"
import SideBar from './SideBar'

const DashBoard = () => {
    const user = useSelector(state => state.session.user)

    return (
        <div className="dashboard__container">
             <SideBar />
        </div>

    )
}

export default DashBoard