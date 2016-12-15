import React from 'react';
import UploadImg from './../utils/UploadImg';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class upPatternModal extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
          open: true,
        };
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this); 
    } 
    handleUrlChange(patternUrl){
      this.props.patternUrlChange(patternUrl);
      this.handleClose();
    }
    handleOpen(){
      this.setState({open: true});
    };

    handleClose(){
      this.setState({open: false});
    };

    render() {
       
        return (
           <Dialog
              title="Create new design" 
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose} >
             <UploadImg buttonName="Upload Your Design" getUrl = {this.handleUrlChange}/>

            </Dialog>
        );
    }
}

export default upPatternModal;