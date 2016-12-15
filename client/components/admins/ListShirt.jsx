import React from 'react';
import ReactDOM from 'react-dom';
import ShirtItem from './ShirtItem.jsx';



class ListShirt extends React.Component{
    componentWillMount(){
      this.props.getListShirt();
    }
    render(){
      return (
        <div>
          <table className="table table-bordered">
           <thead>
             <tr>
               <th>gender</th>
               <th>url</th>
               <th>layoutUrl</th>
               <th>detail</th>
               <th>price</th>
               <th>colorCode</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
            {this.props.shirtData.listShirt.map(shirt =>
                 <ShirtItem

                  removeShirt = {this.props.removeShirt}
                  key = {shirt._id}
                  shirt = {shirt}
                  shirtData={this.props.shirtData}

                 />
              )
            }
           </tbody>
         </table>
         <div>{this.props.shirtData.message}</div>

       </div>
      );
    }
};


export default ListShirt;
