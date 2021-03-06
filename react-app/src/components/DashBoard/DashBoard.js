import React from 'react'
import { useSelector } from 'react-redux'

import "./DashBoard.css"

const DashBoard = () => {
    const user = useSelector(state => state.session.user)

    return (
        <div className="dashboard__container">
             
        </div>

    )
}

export default DashBoard