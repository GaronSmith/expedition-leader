import React from 'react'
import { useSelector } from 'react-redux'

import './GroupBoard.css'

const GroupBoard = () => {
    const user = useSelector(state => state.session.user)
    const [view, setView] = useState("")
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