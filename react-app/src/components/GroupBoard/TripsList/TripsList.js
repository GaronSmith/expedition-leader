import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AddTrip from './AddTrip'
import TripCard from './TripCard'


import './TripsList.css'

const TripsList = () => {
    const trips = useSelector(state => Object.values(state.groups.groupMembers))

    const [tripsRows, setTripsRows] = useState([])
    useEffect(() => {
        if (trips) {
            const rows = [...Array(Math.ceil(trips.length / 4))];
            const tripArr = rows.map((row, idx) => trips.slice(idx * 4, idx * 4 + 4));
            setTripsRows(tripArr)
            
        }
    }, [])

    return (
        <div className='memberslist__container'>
            {tripsRows && tripsRows.map((row, idx) => {
                return <div className="tag__row" key={idx}>
                    {row.map(trip => <TripCard key={trip.id} trip={trip} />)}
                </div>
            })}
            <AddTrip />

        </div>

    )
}

export default TripsList