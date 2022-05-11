import { NavLink } from 'react-router-dom'

function ManufacturerList({ manufacturers }) {
    return (
        <div className="container">
            <h2 className="display-5 fw-bold">Manufacturers</h2>
            <button type="button" className="btn btn-outline-primary"><NavLink className="nav-link" aria-current="page" to="/manufacturers/new">Add a Manufacturer</NavLink></button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers.map(manufacturer => {
                        return(
                            <tr key={manufacturer.id}>
                                <td>{ manufacturer.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
  }
  
  export default ManufacturerList
