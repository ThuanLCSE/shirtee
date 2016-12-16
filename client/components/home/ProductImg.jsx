import React from 'react';
import ReactDOM from 'react-dom';



import FlatButton from 'material-ui/FlatButton';



class ProductImg extends React.Component{


  constructor(props){
    super(props);
    

  } 

  render(){

      return (
        <div className="imageoutside" onClick={() => this.props.openModal(this.props.pattern)}>


        <div className="img-square">
              <img className="img-pattern img-responsive" src={this.props.pattern.url} />
              <img className="img-shirt img-responsive" src={this.props.pattern.recommendPreviewUrl} />
        </div>


        </div>


      );
  }
};

export default ProductImg;
