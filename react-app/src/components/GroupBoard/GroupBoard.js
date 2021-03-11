import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import './GroupBoard.css'
import SideBarGroup from './SideBarGroup/'

const GroupBoard = () => {
    const groupId = useParams()
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const [view, setView] = useState("")

    useEffect(() => {

        // dispatch()
    })
    return (
        <div className="dashboard__container">
            <div>
                <SideBarGroup setView={setView} />
            </div>

            {view}
        </div>
    )
}

export default GroupBoard