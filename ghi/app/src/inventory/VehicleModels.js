import { NavLink } from 'react-router-dom'

function VehicleModels({ models }) {
    return (
        <div className="container">
            <h2 className="display-5 fw-bold">Vehicle Models</h2>
            <button type="button" className="btn btn-outline-primary"><NavLink className="nav-link" aria-current="page" to="/models/new">Add a Vehicle Model</NavLink></button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map(model => {
                        return(
                            <tr key={model.id}>
                                <td>{ model.name}</td>
                                <td>{ model.manufacturer.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
  }
  
  export default VehicleModels