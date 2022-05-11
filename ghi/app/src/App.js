import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceAppointment from './ServiceAppointment.js';
import AppointmentForm from './AppointmentForm.js';
import TechnicianForm from './TechnicianForm.js';
import VinHistory from './VinHistory.js';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModels from './VehicleModels';
import VehicleModelForm from './VehicleModelForm';

function App() {
  const [currentAppointments, setCurrentAppointments] = useState([]);
  const [currentTechnicians, setCurrentTechnicians] = useState([]);
  const [currentManufacturers, setCurrentManufacturers] = useState([]);
  const [currentVehicleModels, setCurrentVehicleModels] = useState([]);
  
  useEffect(() => {
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
      }
      
      const fetchVehicleModels = async () => {
        const responseVehicleModel = await fetch('http://localhost:8100/api/models/');
        const modelData = await responseVehicleModel.json();
        setCurrentVehicleModels(modelData.models)
      }

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
          <Route path="manufacturers">
            <Route index element={<ManufacturerList manufacturers={currentManufacturers} />}/>
            <Route path="new/" element={<ManufacturerForm />}/>
          </Route>
          <Route path="models">
            <Route index element={<VehicleModels models={currentVehicleModels} />}/>
            <Route path="new" element={<VehicleModelForm />}/>
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
