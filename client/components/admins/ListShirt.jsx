import React from 'react';
import ReactDOM from 'react-dom';
import ShirtItem from './ShirtItem.jsx';



class ListShirt extends React.Component{
    componentWillMount(){
      console.log('send api');
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

             </tr>
           </thead>
           <tbody>
            {this.props.AdminStore.listShirt.map(shirt =>
                 <ShirtItem
                  key = {shirt._id}
                  shirt = {shirt}
                 />
              )
            }

           </tbody>
         </table>
         <div>{this.props.AdminStore.message}</div>

       </div>
      );
    }
};


export default ListShirt;
