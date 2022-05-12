function AutomobileList({ automobiles }) {
    return (
      <div className="container">
        <h1>List of Automobiles</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Vehicle Manufacturer Name</th>
              <th>Vehicle Model Name</th>
              <th>Vehicle Year</th>
              <th>Vehicle Color</th>
              <th>Vehicle VIN</th>
              <th>Vehicle Picture</th>
            </tr>
          </thead>
          <tbody>
            {automobiles.map(auto => {
              return (
                <tr key={auto.vin}>
                  <td>{ auto.model.manufacturer.name }</td>
                  <td>{ auto.model.name }</td>
                  <td>{ auto.year }</td>
                  <td>{ auto.color }</td>
                  <td>{ auto.vin }</td>
                  <td><img src={ auto.model.picture_url } height="150"/></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
  
  export default AutomobileList;