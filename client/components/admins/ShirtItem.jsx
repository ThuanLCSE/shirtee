import React from 'react';
import ReactDOM from 'react-dom';


class ShirtItem extends React.Component{
  constructor(props){

    super(props);
    this.takeColor = this.takeColor.bind(this);

  }
  takeColor(id) {
    console.log(id);
    let background = {
        backgroundColor: id,
        width: "20px",
        height: '20px',
        display: 'inline-block'
    }
    return (

          <button style={background} key={id}>
          </button>
    )
  }

    render(){

      return (
        <tr>
          <td className="col-sm-3">{this.props.shirt.gender}</td>
          <td className="col-sm-3">
            <img className="img-responsive" src={this.props.shirt.url} />
          </td>
          <td className="col-sm-3">
            <img className="img-responsive" src={this.props.shirt.layoutUrl}/>
          </td>
          <td className="col-sm-3">{this.props.shirt.detail}</td>
          <td className="col-sm-3">{this.props.shirt.price}</td>
          <td className="col-sm-3">
              {this.props.shirt.colorCode.map(this.takeColor)}
          </td>
           <td>
             <button onClick={(id) => this.props.removeShirt(this.props.shirt)}>
                Remove
              </button>
              {this.props.shirtData.message}
           </td>
        </tr>
      );
    }
};


export default ShirtItem;
