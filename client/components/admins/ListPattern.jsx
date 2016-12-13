import React from 'react';
import ReactDOM from 'react-dom';
import PatternItem from './PatternItem.jsx';



class ViewAdminPattern extends React.Component{
    constructor(props) {
      super(props);
    }
    
    componentWillMount(){
      console.log('send api');
      this.props.getListPattern();
    }
    
    render(){
      return (
        <table className="table table-bordered">
         <thead>
           <tr>
             <th>status</th>
             <th>url</th>
             <th>designer</th>
             <th>vote</th>
             <th>voteQuantity</th>
             <th>name</th>
             <th>available</th>
           </tr>
         </thead>
         <tbody>
          {this.props.PatternList.listPatternAdmin.map(pattern =>
               <PatternItem
               key = {pattern._id}
               pattern = {pattern}
               funcOnControl={this.props.approvePattern}
               funcOnControl2={this.props.deletePattern}
               control={"buttonApprove"}
               />
            )
          }

         </tbody>
       </table>
      );
    }
};


export default ViewAdminPattern;
