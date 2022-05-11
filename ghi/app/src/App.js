import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesList from './sales/SalesList.js';
import SaleForm from './sales/SalesForm.js';
import SalesHistory from './sales/SalesHistory.js';
import ServiceAppointment from './service/ServiceAppointment.js';
import AppointmentForm from './service/AppointmentForm.js';
import TechnicianForm from './service/TechnicianForm.js';
import VinHistory from './service/VinHistory.js';
import ManufacturerList from './inventory/ManufacturerList';
import ManufacturerForm from './inventory/ManufacturerForm';
import VehicleModels from './inventory/VehicleModels';
import VehicleModelForm from './inventory/VehicleModelForm';
import SalesPersonForm from './sales/SalesPersonForm';
import CustomerForm from './sales/CustomerForm';


function App() {
  const [currentSales, setCurrentSales] = useState([]);
  const [currentSalesPerson, setCurrentSalesPerson] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState([]);
  const [currentAutomobile, setCurrentAutomobile] = useState([]);
  const [currentAppointments, setCurrentAppointments] = useState([]);
  const [currentTechnicians, setCurrentTechnicians] = useState([]);
  const [currentManufacturers, setCurrentManufacturers] = useState([]);
  const [currentVehicleModels, setCurrentVehicleModels] = useState([]);
  
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
      const fetchAppointmentData = async () => {
        const responseAppointment = await fetch('http://localhost:8080/api/appointments/');
        const appointmentData = await responseAppointment.json();
        setCurrentAppointments(appointmentData.appointments);
      }

      const fetchTechnicianData = async () => {
        const responseTechnician = await fetch('http://localhost:8080/api/technicians/');
        const technicianData = await responseTechnician.json();
        setCurrentTechnicians(technicianData.techs)
      }

      const fetchManufacturerData = async () => {
        const responseManufacturer = await fetch('http://localhost:8100/api/manufacturers/');
        const manufacturerData = await responseManufacturer.json();
        setCurrentManufacturers(manufacturerData.manufacturers)
        console.log("check this:", manufacturerData)
      }
    
      const fetchVehicleModels = async () => {
        const responseVehicleModel = await fetch('http://localhost:8100/api/models/');
        const modelData = await responseVehicleModel.json();
        setCurrentVehicleModels(modelData.models)
      }

      fetchSaleData()
      fetchSalesPersonData()
      fetchCustomerData()
      fetchAutomobileData()
      fetchAppointmentData()
      fetchTechnicianData()
      fetchManufacturerData()
      fetchVehicleModels()
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
          <Route path="sales_persons">
            <Route path ="create/" element={<SalesPersonForm/>}/>
          </Route>
          <Route path="customers">
            <Route path="create/" element={<CustomerForm/>}/>
          </Route>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList manufacturers={currentManufacturers} />}/>
            <Route path="new/" element={<ManufacturerForm />}/>
          </Route>
          <Route path="models">
            <Route index element={<VehicleModels models={currentVehicleModels} />}/>
            <Route path="new" element={<VehicleModelForm manufacturers={currentManufacturers} />}/>
          </Route>
          <Route path="services">
            <Route index element={<ServiceAppointment appointments={currentAppointments} />}/>
            <Route path="create/" element={<AppointmentForm appointments={currentAppointments} technicians={currentTechnicians} />} />
            <Route path="history" element={<VinHistory appointments={currentAppointments} />}/>
          </Route>
          <Route path="technicians">
            <Route index element={<TechnicianForm technicians={currentTechnicians} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
