import React from 'react';
import ReactDOM from 'react-dom';


class ShirtItem extends React.Component{
    render(){
      return (
        <tr>
          <td>{this.props.shirt.gender}</td>
          <td>
            <img className="img-responsive" src={this.props.shirt.url} />
          </td>
          <td>
            <img className="img-responsive" src={this.props.shirt.layoutUrl}/>
          </td>
          <td>{this.props.shirt.detail}</td>
          <td>{this.props.shirt.colorCode}</td>
        </tr>
      );
    }
};


export default ShirtItem;
