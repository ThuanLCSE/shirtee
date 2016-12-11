import React from 'react';
import ReactDOM from 'react-dom';



class PatternItem extends React.Component{
    constructor(props) {
      super(props);
      this.approve = this.approve.bind(this);
    }
    
    approve() {
        this.props.approvePattern(this.props.pattern._id)
    }
    
    render(){
      return (
        <tr>
          <td>{this.props.pattern.status}</td>
          <td>{this.props.pattern.url}</td>
          <td>{this.props.pattern.designer}</td>
          <td>{this.props.pattern.vote}</td>
          <td>{this.props.pattern.voteQuantity}</td>
          <td>{this.props.pattern.name}</td>
          <td>{this.props.pattern.available ? "true" : "false"}</td>
          <td><button onClick={this.approve}>Approve</button></td>
        </tr>
      );
    }
};


export default PatternItem;
