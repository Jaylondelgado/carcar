import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <div className='dropdown'>
          <NavLink className="btn btn-success dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Services
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <NavLink className="dropdown-item" to="/services">Service Appointments</NavLink>
                  <NavLink className="dropdown-item" to="/services/create/">Create a Service Appointment</NavLink>
                  <NavLink className="dropdown-item" to="/services/history/">Service History</NavLink>
                  <NavLink className="dropdown-item" to="technicians/">Create a Technician</NavLink>
                </div>
        </div>
        <div className='dropdown'>
              <NavLink className="btn btn-success dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sales
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <NavLink className="nav-link" aria-current="page" to="/customers/create/">Create new customer</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/sales/create/">Create a New Sale</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/sales">Sales List</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/sales_persons/create/">Create new Sales person</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/sales/history/">Sales person history</NavLink>
              </div>
        </div>
        <div className='dropdown'>
              <NavLink className="btn btn-success dropdown-toggle" to="#" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Inventory
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <NavLink className="nav-link" aria-current="page" to="/manufacturers/new/">Create a Manufacturer</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/manufacturers">Show Manufacturers</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/models/new">Create a New Vehicle Model</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/models">Show Vehicle Models</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/automobiles/create/">Add an Automobile</NavLink>
                <NavLink className="nav-link" aria-current="page" to="/automobiles">Automobile List</NavLink>
              </div>
        </div>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">           
          </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
