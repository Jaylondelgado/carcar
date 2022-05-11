import React, { useState } from 'react'

function CustomerForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
            address: address,
            phone_number: phoneNumber
        }
        const url = 'http://localhost:8090/api/customers/';
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
            setAddress('');
            setPhoneNumber('');
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value)
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a new Customer</h1>
            <form onSubmit={handleSubmit} id="create-customer-form">
            <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Customer Name" required name="customer_name" id="name" className="form-control" />
                <label htmlFor="customer_name">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleAddressChange} value={address} placeholder="Address" required name="address" id="address" className="form-control" />
                <label htmlFor="vin">Address</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handlePhoneNumberChange} value={phoneNumber} placeholder="Phone number" required name="phone_number" id="phone_number" className="form-control" />
                <label htmlFor="vin">Address</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
)
}

export default CustomerForm