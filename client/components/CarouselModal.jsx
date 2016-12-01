import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CarouselLogo from './CarouselLogo';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

 const customContentStyle = {
   width: '100%',
   maxWidth: 'none',
 };


 class CarouselModal extends React.Component {

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
  //  handleOpen = () => {
  //    this.setState({open: true});
  //  };
   //
  //  handleClose = () => {
  //    this.setState({open: false});
  //  };



  render() {

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle= {customContentStyle}
        >
        <CarouselLogo />
        </Dialog>
      </div>
    );
  }
}

export default CarouselModal;
