import React from 'react';
import ReactDOM from 'react-dom';



class PatternItem extends React.Component{
    render(){
      return (
        <tr>
          <td>{this.props.pattern.status}</td>
          <td>{this.props.pattern.url}</td>
          <td>{this.props.pattern.designer}</td>
          <td>{this.props.pattern.vote}</td>
          <td>{this.props.pattern.voteQuantity}</td>
          <td>{this.props.pattern.name}</td>
          <td>{this.props.pattern.available}</td>
        </tr>
      );
    }
};


export default PatternItem;
