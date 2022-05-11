import React, { useState } from "react"

function VinHistory({ appointments }) {
    const [search, setSearch] = useState("");
    const [filteredAppointments, setfilteredAppointments] = useState([]);
    const filteredAppointments = appointments.filter(appointment =>)
    const handleClick = () => {
      const filtered = appointments.filter(appointment => appointment.vin == search)
      setfilteredAppointments(filtered);
    }      
    console.log("here we go", filteredAppointments)
    
    return (
      <>
        <div>
            <input type="text" placeholder='Search VINs' onChange={event => setSearch(event.target.value)} />
            <span><button onClick={handleClick} type="submit">Search</button></span>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>VIP</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map(appointment => {
              return (
                <tr key={appointment.id}>
                  <td>{ appointment.vin }</td>
                  <td>{ appointment.name }</td>
                  <td>{ appointment.date }</td>
                  <td>{ appointment.time }</td>
                  <td>{ appointment.technician.name }</td>
                  <td>{ appointment.reason }</td>
                  {appointment.vip && (
                    <td>True</td>
                  )}
                  {!appointment.vip && (
                    <td>False</td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  
export default VinHistory;

