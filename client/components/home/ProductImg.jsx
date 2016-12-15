import React from 'react';
import ReactDOM from 'react-dom';



import FlatButton from 'material-ui/FlatButton';



class ProductImg extends React.Component{


  constructor(props){
    super(props);
    this.state = {

    };

  }






  render(){

      return (
        <div className="imageoutside" onClick={this.props.openModal}>


        <div className="img-square">
              <img className="img-pattern img-responsive" src={this.props.url} />
              <img className="img-shirt img-responsive" src="https://image.freepik.com/free-vector/amazing-full-color-background-with-wavy-shapes_1126-105.jpg" />
        </div>


        </div>


      );
  }
};

export default ProductImg;
