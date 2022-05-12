import React, { useState } from 'react';

function SaleForm({ sales_persons, customers, automobiles }) {
    const [salesPersonName, setSalesPersonName] = useState ("");
    const [customerName, setCustomerName] = useState('');
    const [automobile, setAutomobile] = useState('');
    const [salesPrice, setSalesPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            sales_person: salesPersonName,
            customer: customerName,
            automobile: automobile,
            sales_price: salesPrice,
        }
        console.log("data:", data)
        const url = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application.json'
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setSalesPersonName('');
            setCustomerName('');
            setAutomobile('');
            setSalesPrice('');
        }
    }
    const handleSalesPersonNameChange = (event) => {
        setSalesPersonName(event.target.value)
    }
    const handleCustomerNameChange = (event) => {
        setCustomerName(event.target.value)
    }
    const handleAutomobileChange = (event) => {
        setAutomobile(event.target.value)
    }
    const handleSalesPriceChange = (event) => {
        setSalesPrice(event.target.value)
    }
    return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a new Sale</h1>
            <form onSubmit={handleSubmit} id="create-appointment-form">
            <div className="form-floating mb-3">
                <select onChange={handleSalesPersonNameChange} value={salesPersonName} required id="sales_person" name="sales_person" className="form-select">
                        <option value="">Choose a Sales Person</option>
                        {sales_persons.map(sale_person => {
                            console.log("here:", sale_person)
                            return(
                                <option value={sale_person.id} key={sale_person.id}>
                                    {sale_person.name}
                                </option>
                            )
                        })}
                        </select>
            </div>
            <div className="form-floating mb-3">
                <select onChange={handleCustomerNameChange} value={customerName} required id="customer" name="customer" className="form-select">
                        <option value="">Choose a Customer</option>
                        {customers.map(customer => {
                            console.log("customers:", customer)
                            return(
                                <option value={customer.id} key={customer.id}>
                                    {customer.name}
                                </option>
                            )
                        })}
                        </select>
            </div>
            <div className="form-floating mb-3">
                <select onChange={handleAutomobileChange} value={automobile} required id="automobile" name="automobile" className="form-select">
                        <option value="">Choose a Vin</option>
                        {console.log("automobiles:", automobiles)}
                        {automobiles.map(automobile => {
                            return(
                                <option value={automobile.href} key={automobile.vin}>
                                    {automobile.vin}
                                </option>
                            )
                        })}
                        </select>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleSalesPriceChange} value={salesPrice} placeholder="sales_price" required name="sales_price" id="sales_price" className="form-control" />
                <label htmlFor="reason">Sales price</label>
            </div>
            <button className="btn btn-primary">Create</button>
            </form>
        </div>
        </div>
    </div>
)
}

export default SaleForm

