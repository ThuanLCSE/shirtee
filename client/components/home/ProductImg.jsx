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
        <div onClick={this.handleOpen}>

          <Dialog

            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            contentStyle={customContentStyle}
          >
          <CarouselLogo />
        </Dialog>


            <div className="hovereffect" >
              <img className="img-responsive" src="https://image.freepik.com/free-vector/grey-background-design_23-2147489413.jpg" />
            </div>

        </div>


      );
  }
};

export default ProductImg;
