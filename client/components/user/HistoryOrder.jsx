import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as UserAct from '../../actions/ActionSignIn.jsx';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import SideBar from './SideBar';
const orders = [
  {
    orderId: 'ID0023',
    date: new Date(),
    price: 50.00,
    status: 'Printing'
  },
  {
    orderId: 'ID0024',
    date: new Date(),
    price: 60.00,
    status: 'Printing'
  },
  {
    orderId: 'ID0025',
    date: new Date(),
    price: 121.00,
    status: 'Delivering'
  },
  {
    orderId: 'ID0026',
    date: new Date(),
    price: 72.64,
    status: 'Printing'
  },
  {
    orderId: 'ID0027',
    date: new Date(),
    price: 100.00,
    status: 'Shipped'
  },
  {
    orderId: 'ID0028',
    date: new Date(),
    price: 25.55,
    status: 'Delivering'
  },
  {
    orderId: 'ID0029',
    date: new Date(),
    price: 11.11,
    status: 'Shipped'
  },
];

class HistoryOrder extends React.Component{
    constructor(props) {
        super(props);
    }
    
  render(){
    return(
      <div className="container">
        <div className="col-sm-3">
            <SideBar/>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-8">
            <h2>History Order</h2>
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn tooltip="Order ID">Order ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Date">Date</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Price">Price</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Status">Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody showRowHover={true} displayRowCheckbox={false}>
                {orders.map( (row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{row.orderId}</TableRowColumn>
                    <TableRowColumn>{row.date.toLocaleDateString()}</TableRowColumn>
                    <TableRowColumn>{row.price}</TableRowColumn>
                    <TableRowColumn>{row.status}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
            </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserTodo: state.UserTodo
});

const mapDispatchToProps = dispatch => ({
    UserAct: bindActionCreators(UserAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryOrder);