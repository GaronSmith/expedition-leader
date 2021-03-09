import React, { useState } from 'react'

import './GearForm.css'

const GearForm = ({group}) => {
    const [name, setName] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const [imageFile, setImageFile] = useState(null)
    const [status, setStatus] = useState("")
    const [purchaseDate, setPurchaseDate] = useState(new Date().toISOString().split('T')[0])
    const [cost, setCost] = useState(0.00)
    const [quantity, setQuantity] = useState(1)
    const [errors, setErrors] = useState([])

    const category = group.id

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
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
                <label>Photo of item</label>
                <input
                    type="file"
                    name="imageFile"
                    onChange={(e) => setImageFile(e.target.files[0])}
                ></input>
            </div>
            <div className='form__input'>
                <label htmlFor="cost">Cost ($)</label>
                <input
                    name="cost"
                    type="text"
                    placeholder="cost"
                    value={cost}
                    onChange={(e) => setCost(parseInt(e.target.value * 100))}
                />
            </div>
            <div className='form__input'>
                <label htmlFor="cost">Quantity</label>
                <input
                    name="quantity"
                    type="number"
                    placeholder="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value * 100))}
                />
            </div>
            <div className='form__input'>
                <label htmlFor="cost">Purchase Date</label>
                <input
                    name="purchaseDate"
                    type="date"
                    placeholder="purchaseDate"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(parseInt(e.target.value * 100))}
                />
            </div>
            <div className='form__input'>
                <button className='form__button' type="submit">Login</button>
            </div>
        </form>

    )
}

export default GearForm