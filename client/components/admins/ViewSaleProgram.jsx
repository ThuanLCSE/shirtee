import React from 'react';
import ReactDOM from 'react-dom';

class ViewSaleProgram extends React.Component{
    componentWillMount(){
      this.props.getListSale();
    }
    saleItem(sale){
      return (
        <tr key={sale._id}>
                       <td>{sale.detail}</td>
                       <td>{sale.percentage}</td>
                       <td>{sale.startDay}</td>
                       <td>{sale.endDay}</td>
                   </tr>
        )
    }
    render(){
      return (
          <table className="table table-bordered">
              <thead>
               <tr>
                 <th>Detail</th>
                 <th>Percentage</th>
                 <th>Start Day</th>
                 <th>End Day</th>
               </tr>
             </thead>
             <tbody>
              {this.props.saleList.listSale.map(this.saleItem)}

             </tbody>
          </table>
      );
    }
};


export default ViewSaleProgram;
