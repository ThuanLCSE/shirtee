import React from 'react';
import ReactDOM from 'react-dom';

class ViewSaleProgram extends React.Component{
    componentWillMount(){
      this.props.getListSale();
    }
    
    render(){
        console.log("check loop");
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
              {this.props.saleList.listSale.map(sale =>
                   <tr>
                       <td>{sale.detail}</td>
                       <td>{sale.percentage}</td>
                       <td>{sale.startDay}</td>
                       <td>{sale.endDay}</td>
                   </tr>
                )
              }

             </tbody>
          </table>
      );
    }
};


export default ViewSaleProgram;
