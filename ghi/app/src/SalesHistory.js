import React from 'react';


// function SalesHistory({ sales }) {
//     const [search, setSearch] = useState("");
//     const [filteredSales, setfilteredSales] = useState([]);
//     const handleClick = () => {
//       const filtered = sales.filter(sale => sale.sales_person.name == search)
//       console.log("YOLO", filtered)
//       setfilteredSales(filtered);
//     }      

    
//     return (
//       <>
//         <div>
//             <input type="text" placeholder='Search Sales' onChange={event => setSearch(event.target.value)} />
//             <span><button onClick={handleClick} type="submit">Search</button></span>
//         </div>
//         <table className="table table-striped table-hover">
//           <thead>
//             <tr>
//               <th>Sales_person</th>
//               <th>Customer Name</th>
//               <th>VIN</th>
//               <th>Sales price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredSales.map(sale => {
//               return (
//                 <tr key={sale.id}>
//                   <td>{ sale.sales_person.name }</td>
//                   <td>{ sale.cusomer.name }</td>
//                   <td>{ sale.automobile.vin }</td>
//                   <td>{ sale.sales_price }</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </>
//     );
//   }
  
// export default SalesHistory;

class SalesHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salesPersons: [],
      sales: [],
      salesPerson: '',
    };
    this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
  }

  async handleSalesPersonChange(event) {
    const salesPersonValue = event.target.value;
    this.setState({salesPerson: salesPersonValue});

    const saleUrl = 'http://localhost:8090/api/sales/';
    const saleResponse = await fetch(saleUrl);

    if (saleResponse.ok) {
      const saleData = await saleResponse.json();

      if (this.state.salesPerson === "all") {
        this.setState({sales: saleData.sales});
      } else {
        let filteredSaleList = [];
        for (const sale of saleData.sales) {
          if (String(sale.sales_person.employee_number) === this.state.salesPerson) {
            filteredSaleList.push(sale);
          }
        }
        this.setState({sales: filteredSaleList});
      }
    }
  }

  async componentDidMount() {
    const salesPersonsUrl = 'http://localhost:8090/api/sales_persons/';
    const salesPersonsResponse = await fetch(salesPersonsUrl);

    if (salesPersonsResponse.ok) {
      const salesPersonsData = await salesPersonsResponse.json();
      this.setState({salesPersons: salesPersonsData.sales_persons});
    }

    const saleRecordUrl = 'http://localhost:8090/api/sales/';
    const saleRecordResponse = await fetch(saleRecordUrl);

    if (saleRecordResponse.ok) {
      const saleRecordData = await saleRecordResponse.json();
      this.setState({sales: saleRecordData.sales});
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Sales Person History</h1>
        <div>
          <select onChange={this.handleSalesPersonChange} value={this.state.salesPerson} required name="salesPerson" id="salesPerson" className="form-select">
            <option value="all">Choose a Sales Person</option>
            {this.state.salesPersons.map(salesPerson => {
              return (
                <option key={salesPerson.employee_number} value={salesPerson.employee_number}>
                  {salesPerson.name} - Emp #{salesPerson.employee_number}
                </option>
              )
            })}
          </select>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sales Person</th>
              <th>Purchaser's Name</th>
              <th>Automobile VIN</th>
              <th>Purchase Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sales.map(sale => {
              return (
                <tr key={sale.pk}>
                  <td>{ sale.sales_person.name }</td>
                  <td>{ sale.customer.name }</td>
                  <td>{ sale.automobile.vin }</td>
                  <td>{ sale.sales_price }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SalesHistory;
