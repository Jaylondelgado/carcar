import React from "react";

function AppointmentList({ appointments }) {
  // const filteredAppts
    const deleteItem = async (id) => {
      fetch(`http://localhost:8080/api/appointments/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'
      }
      }).then(() => {
        window.location.reload();
      })
    }
    const finishAppt = async (id) => {
      await fetch(`http://localhost:8080/api/appointments/${id}/`,{
          method: 'PUT',
          body: JSON.stringify({finished: true}),
          headers: {'Content-Type': 'application/json'},
      }).then(() =>{
          window.location.reload();
      })
  }
  const handleSubmit = (id) => {
    finishAppt(id);
  };

  
      return(
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
          {appointments.map(appointment => {
            let finishedClass = ''
            if (appointment.finished === true) {
              finishedClass = 'd-none'
            }
            return (
              <tr className={finishedClass} key={appointment.id}>
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
                <td><button onClick={() => deleteItem(appointment.id)}>Cancel</button><button className="btn btn-success" onClick={() => handleSubmit(appointment.id)}>Finished</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      )
  }
  
  export default AppointmentList
