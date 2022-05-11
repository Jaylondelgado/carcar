import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesList from './SalesList.js';
import SaleForm from './SalesForm.js';
import SalesHistory from './SalesHistory.js';

function App() {
  const [currentSales, setCurrentSales] = useState([]);
  const [currentSalesPerson, setCurrentSalesPerson] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState([]);
  const [currentAutomobile, setCurrentAutomobile] = useState([]);
  
  useEffect(() => {
      const fetchSaleData = async () => {
        const responseSale = await fetch('http://localhost:8090/api/sales/');
        const saleData = await responseSale.json();
        setCurrentSales(saleData.sales);
      }

      const fetchSalesPersonData = async () => {
        const responseSalesPerson = await fetch('http://localhost:8090/api/sales_persons/');
        const salespersonData = await responseSalesPerson.json();
        setCurrentSalesPerson(salespersonData.sales_persons);
      }
      const fetchCustomerData = async () => {
        const responseCustomer = await fetch('http://localhost:8090/api/customers');
        const customerData = await responseCustomer.json();
        setCurrentCustomer(customerData.customers);
      }
      const fetchAutomobileData = async () => {
        const responseAutomobile = await fetch('http://localhost:8100/api/automobiles/');
        const automobileData = await responseAutomobile.json();
        setCurrentAutomobile(automobileData.autos);
      }

      fetchSaleData()
      fetchSalesPersonData()
      fetchCustomerData()
      fetchAutomobileData()
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales">
            <Route index element={<SalesList sales={currentSales}/>}/>
            <Route path="create/" element={<SaleForm sales_persons={currentSalesPerson} customers={currentCustomer} automobiles={currentAutomobile}/>}/>
            <Route path="history/" element={<SalesHistory/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
