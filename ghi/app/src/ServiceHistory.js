function Search({ appointments }){

    return(
        <div>
            <div className = "input-group mb-3">
            </div>
                <h2 className="display-5 fw-bold">Service History</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                        </tr>
                    </thead>
                    <tbody>
                {appointments.map(appointment => {
                    return(
                    <tr className="vin" key={appointment.id}>
                        <td>{appointment.vin}</td>
                    </tr>
                    )
                })}
                </tbody>
                </table>
        </div>
    )
}

export default Search
