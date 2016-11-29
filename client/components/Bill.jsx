import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


class Bill extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn>Product</TableHeaderColumn>
                    <TableHeaderColumn>Quantity</TableHeaderColumn>
                    <TableHeaderColumn>Unit Price</TableHeaderColumn>
                    <TableHeaderColumn>Total Price</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody showRowHover={true} displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>TeeShirt For Man With ABCD pattern</TableRowColumn>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>50</TableRowColumn>
                    <TableRowColumn>50</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>TeeShirt For Man With ABC pattern</TableRowColumn>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>50</TableRowColumn>
                    <TableRowColumn>50</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>TeeShirt For Man With ABC pattern</TableRowColumn>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>50</TableRowColumn>
                    <TableRowColumn>50</TableRowColumn>
                  </TableRow>
                  <TableRow style={{fontWeight: 'bold'}}>
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn>150</TableRowColumn>
                  </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default Bill;