function SalesList({ sales }) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales Person</th>
            <th>Employee number</th>
            <th>Purchaser</th>
            <th>VIN</th>
            <th>sale price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(sale => {
            return (
              <tr key={sale.href}>
                <td>{sale.sales_person.name}</td>
                <td>{sale.sales_person.employee_number}</td>
                <td>{sale.customer.name}</td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.sales_price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  }
  
  export default SalesList;