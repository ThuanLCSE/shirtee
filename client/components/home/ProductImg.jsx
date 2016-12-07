import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'material-ui/Dialog';
import CarouselLogo from './../CarouselLogo';
import FlatButton from 'material-ui/FlatButton';
import ImagePaper from './../ImagePaper';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};


class ProductImg extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }




  handleOpen() {
    this.setState({open: true});
  }
  handleClose() {
    this.setState({open: false});
  }



  render(){

      return (
        <div className="imageoutside" onClick={this.handleOpen}>
          <Dialog
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            contentStyle={customContentStyle}
          >
          <CarouselLogo />
        </Dialog>
            <div>
              <img className="img-pattern img-responsive" src="https://image.freepik.com/free-vector/color-waves-with-brush-style_23-2147496667.jpg" />
              <img className="img-shirt img-responsive" src="https://image.freepik.com/free-vector/amazing-full-color-background-with-wavy-shapes_1126-105.jpg" />
            </div>

        </div>


      );
  }
};

export default ProductImg;
