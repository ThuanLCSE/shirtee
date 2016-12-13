import React from 'react';
import ReactDOM from 'react-dom';



class PatternItem extends React.Component{
    constructor(props) {
      super(props);
      this.controlFunc = this.controlFunc.bind(this);
    }
    
    controlFunc(e) {
        this.props.funcOnControl(e, this.props.pattern._id);
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
          <td>{this.props.control === "buttonApprove" ? <button onClick={this.controlFunc}>Approve</button> :
              this.props.control === "checkboxSale" ?
                  <z><input onChange={this.controlFunc} type="checkbox"/>Choose this</z> : null}</td>
        </tr>
      );
    }
};

export default PatternItem;
