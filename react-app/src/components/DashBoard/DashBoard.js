import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import "./DashBoard.css"
import GearBox from './GearBox'
import SideBar from './SideBar'

const DashBoard = () => {
    const user = useSelector(state => state.session.user)
    const [view, setView] = useState(
   <h1>test</h1>)

    return (
        <div className="dashboard__container">
            <div>
                <SideBar setView={setView}/>
            </div>
            {/* <div className='gearbox'>
                <GearBox />
            </div> */}
            {view}
        </div>

    )
}

export default DashBoard