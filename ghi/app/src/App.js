import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceAppointment from './ServiceAppointment.js';
// import AppointmentForm from './AppointmentForm.js';

function App() {
  const [currentAppointments, setCurrentAppointments] = useState([]);
  const [currentTechnicians, setCurrentTechnicians] = useState([]);
  
  useEffect(() => {
      const fetchAppointmentData = async () => {
          const responseAppointment = await fetch('http://localhost:8080/api/appointments/');
          const appointmentData = await responseAppointment.json();
          console.log(appointmentData);
          setCurrentAppointments(appointmentData.appointments);
      }

      const fetchTechnicianData = async () => {
        const responseTechnician = await fetch('http://localhost:8080/api/technicians/');
        const technicianData = await responseTechnician.json();
        setCurrentTechnicians(technicianData.technicians)
      }

      fetchAppointmentData()
      fetchTechnicianData()
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="services">
            <Route index element={<ServiceAppointment appointments={currentAppointments} technicians={currentTechnicians} />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
