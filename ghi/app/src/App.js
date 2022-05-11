import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesList from './SalesList.js';
import SaleForm from './SalesForm.js';
import SalesHistory from './SalesHistory.js';
import ServiceAppointment from './ServiceAppointment.js';
import AppointmentForm from './AppointmentForm.js';
import TechnicianForm from './TechnicianForm.js';
import VinHistory from './VinHistory.js';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModels from './VehicleModels';
import VehicleModelForm from './VehicleModelForm';


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
