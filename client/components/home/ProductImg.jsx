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
              <img className="img-responsive" src="https://images.freecreatives.com/wp-content/uploads/2016/02/Black-Wood-Plank-Background-Wallpaper.jpg" />
                  <div className="overlay">
                      <h2>Hover effect 8</h2>
                  </div>
            </div>

        </div>


      );
  }
};

export default ProductImg;
