import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/Delete';
import {Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const shirts = [
  {
    detail: 'Tee Shirt with OMFG pattern',
    size: 'XL',
    color: 'indigo',
    quantity: 4,
    unitPrice: 20.00
  },
  {
    detail: 'Tee Shirt with YEAH pattern',
    size: 'L',
    color: 'black',
    quantity: 1,
    unitPrice: 19.00
  },
  {
    detail: 'Tee Shirt with this suck pattern',
    size: 'M',
    color: 'scarlet',
    quantity: 2,
    unitPrice: 23.00
  },
  {
    detail: 'Tee Shirt with none pattern',
    size: 'XS',
    color: 'mint',
    quantity: 1,
    unitPrice: 25.00
  },
  {
    detail: 'Tee Shirt with stupid pattern',
    size: 'S',
    color: 'lime',
    quantity: 2,
    unitPrice: 15.00
  }
];

var total = 0
shirts.map( (row, index) => (total += row.quantity * row.unitPrice));

class Bill extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Table multiSelectable="true">
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn tooltip="Product">Product</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Size">Size</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Color">Color</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Quantity">Quantity</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Unit Price">Unit Price</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Total Price">Total Price</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody showRowHover={true}>
                    {shirts.map( (row, index) => (
                      <TableRow key={index} selected={row.selected}>
                        <TableRowColumn>{row.detail}</TableRowColumn>
                        <TableRowColumn>{row.size}</TableRowColumn>
                        <TableRowColumn>{row.color}</TableRowColumn>
                        <TableRowColumn>{row.quantity}</TableRowColumn>
                        <TableRowColumn>{row.unitPrice}</TableRowColumn>
                        <TableRowColumn>{row.quantity * row.unitPrice}</TableRowColumn>
                      </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                      <TableRowColumn>
                        <IconButton tooltip="Delete Selected">
                          <ActionDelete />
                        </IconButton>
                     </TableRowColumn>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn><b>{total}</b></TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        );
    }
}

export default Bill;