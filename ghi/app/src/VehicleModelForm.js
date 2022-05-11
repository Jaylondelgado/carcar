import React, { useState } from 'react'

function VehicleModelForm({ models }) {
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
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
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a new Model</h1>
            <form onSubmit={handleSubmit} id="create-model-form">
            <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
)
}

export default VehicleModelForm
