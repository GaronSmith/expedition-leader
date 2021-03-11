import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentGroups } from '../../store/groups'

import "./DashBoard.css"
import GearBox from './GearBox'
import SideBar from './SideBar'

const DashBoard = () => {
    const user = useSelector(state => state.session.user)
    const [view, setView] = useState(
   <h1>test</h1>)

   const dispatch = useDispatch()
   useEffect(() => {
       dispatch(getCurrentGroups())
   })

    return (
        <div className="dashboard__container">
            <div>
                <SideBar setView={setView}/>
            </div>

            {view}
        </div>

    )
}

export default DashBoard