import React from "react";

function AppointmentList({ appointments }) {
    const deleteItem = async (id) => {
      fetch(`http://localhost:8080/api/appointments/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'
      }
      }).then(() => {
        window.location.reload();
      })
    }
  
      return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => {
            return (
              <tr key={appointment.id}>
                <td>{ appointment.vin }</td>
                <td>{ appointment.name }</td>
                <td>{ appointment.date }</td>
                <td>{ appointment.time }</td>
                <td>{ appointment.technician.name }</td>
                <td>{ appointment.reason }</td>
                <td><button onClick={() => deleteItem(appointment.id)}>Cancel</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      )
  }
  
  export default AppointmentList
