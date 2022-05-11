import React, { useState } from 'react'

function VehicleModelForm({ manufacturers }) {
    const [name, setName] = useState('');
    const [picture_url, setPictureUrl] = useState('');
    const [manufacturer, setManufacturer] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
            picture_url: picture_url,
            manufacturer: manufacturer,
        }
        const url = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setName('');
            setPictureUrl('');
            setManufacturer('');
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handlePictureChange = (event) => {
        setPictureUrl(event.target.value)
    }
    const handleManufacturerChange = (event) => {
        setManufacturer(event.target.value)
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a New Vehicle Model</h1>
            <form onSubmit={handleSubmit} id="create-model-form">
            <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handlePictureChange} value={picture_url} placeholder="Picture" required type="text" name="picture_url" id="picture_url" className="form-control" />
                <label htmlFor="name">Picture URL</label>
            </div>
            <div className="form-floating mb-3">
                <select onChange={handleManufacturerChange} value={manufacturer} required id="manufacturer" name="manufacturer" className="form-select">
                        <option value="">Choose a Manufacturer</option>
                        {manufacturers.map(manufacturer => {
                            return(
                                <option value={manufacturer.href} key={manufacturer.href}>
                                    {manufacturer.name}
                                </option>
                            )
                        })}
                        </select>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
)
}

export default VehicleModelForm
