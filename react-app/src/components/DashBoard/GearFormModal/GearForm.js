import React, { useState } from 'react'

import './GearForm.css'

const GearForm = () => {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const [imageFile, setImageFile] = useState(null)
    const [status, setStatus] = useState("")
    const [purchaseDate, setPurchaseDate] = useState(new Date())
    const [cost, setCost] = useState(0.00)
    const [quantity, setQuantity] = useState(1)
    const [errors, setErrors] = useState([])

    let onLogin

    return (
        <form onSubmit={onLogin}>
            <h1 className='form__title'>Add Gear</h1>
            <div className='form__errors'>
                {errors.map((error) => (
                    <div>{error}</div>
                ))}
            </div>

            <div className='form__input'>
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form__input'>
                <label htmlFor="manufacturer">Manufacturer</label>
                <input
                    name="manufacturer"
                    type="text"
                    placeholder="Manufacturer"
                    value={manufacturer}
                    onChange={(e) => setManufacturer(e.target.value)}
                />
            </div>
            <div className='form__input'>
                <label htmlFor="cost">cost</label>
                <input
                    name="cost"
                    type="text"
                    placeholder="cost"
                    value={cost}
                    onChange={(e) => setCost(parseInt(e.target.value * 100))}
                />
            </div>
            <div className='form__input'>
                <label htmlFor="password">Password</label>
                {/* <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={updatePassword}
                /> */}
                <button className='form__button' type="submit">Login</button>
                {/* <button className='form__button' onClick={onClick}>Demo User</button> */}
            </div>
        </form>

    )
}

export default GearForm