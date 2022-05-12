import React, { useState } from 'react'


function SalesPersonForm() {
    const [name, setName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
            employee_number: employeeNumber,
        }
        const url = 'http://localhost:8090/api/sales_persons/';
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
            setEmployeeNumber('');
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleEmployeeNumberChange = (event) => {
        setEmployeeNumber(event.target.value)
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a new Sales Person</h1>
            <form onSubmit={handleSubmit} id="create-appointment-form">
            <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Customer Name" required name="customer_name" id="name" className="form-control" />
                <label htmlFor="customer_name">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleEmployeeNumberChange} value={employeeNumber} placeholder="Employee Number" required name="employee_number" id="employee_number" className="form-control" />
                <label htmlFor="vin">Employee Number</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
)
}

export default SalesPersonForm