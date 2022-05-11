import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Service Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services/create/">Create a Service Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services/history/">Service Appointment History</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="technicians/">Create a Technician</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/manufacturers/new/">Create a Manufacturer</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/models">Vehicle Models</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/sales">Sales List</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/sales/create/">Create new sale</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/sales/history/">Sales person history</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/customers/create/">Create new customer</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/sales_persons/create/">Create new Sales person</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
