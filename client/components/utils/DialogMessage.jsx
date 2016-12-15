import React from 'react';
import UploadImg from './../utils/UploadImg';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class DialogMessageModal extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
          open: (this.props.message !== ''),
        };
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this); 
        this.patternInfo = this.patternInfo.bind(this); 

    } 
    handleUrlChange(patternUrl){
      this.props.patternUrlChange(patternUrl);
      this.handleClose();
    }
    handleOpen(){
      this.setState({open: true});
    };

    handleClose(){ 
    	this.props.closeMessage();
      this.setState({open: false});
    };
    patternInfo(){
    	return(
    		<table className="table"> 
			    <tbody>
			      <tr>
			        <td>Name</td>
			        <td>{this.props.pattern.name}</td> 
			      </tr>
			      <tr>
			        <td>Price</td>
			        <td>{this.props.pattern.price}</td> 
			      </tr>
			        <tr>
			        <td>Status</td>
			        <td>{this.props.pattern.status}</td> 
			      </tr>
			       
			        <tr>
			        <td>expireDay</td>
			        <td>{(new Date(this.props.pattern.expireDay)).toLocaleDateString()}</td> 
			      </tr>   
			    </tbody>
			  </table>
    	)
    }
    render() {
       
        const actions = [
            <FlatButton
              label="OK"
              primary={true}
              onTouchTap={this.handleClose}  />, 
          ];
        return (
           <Dialog
              title="Notice from us" 
              modal={false}
              actions={actions}
              open={this.state.open}
              onRequestClose={this.handleClose} > 
                <label>{this.props.message}</label>
                {this.props.pattern.name?this.patternInfo():null}
            </Dialog> 
        );
    }
}

export default DialogMessageModal;