import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import userTodo from '../stores/UserList';

const customContentStyle = {
    width: '30%',
    maxWidth: 'none'
};
const stylePaper = {
    padding:0 ,
    margin: 0
}

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            email: '',
            openSignUp: false
        };
        this.getValue = this.getValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    getValue() {
        this.props.SignInFunc(this.state.email, '123456');
        this.setState({open: false, openSignUp: false});
    }
    
    handleChange(e) {
        this.setState({email:e.target.value});
    }
    
    render() {
        return (
            <div>
                <RaisedButton label="Sign in" onClick={() => this.setState({open: true})} />
                <Dialog
                  title="Sign In"
                  modal={false}
                  contentStyle={customContentStyle}
                  style={{padding: -19}}
                  open={this.state.open}
                  onRequestClose={() => this.setState({open: false})}>
                        <TextField  floatingLabelText="Your email"
                                    hintText="Your email"
                                    onChange={this.handleChange}/>
                        <TextField type="password" floatingLabelText="Your password" hintText="Your password"/>
                        <br/><br/>
                        <RaisedButton label="Sign In" style={{marginRight: 50}} primary={true} onClick={this.getValue}/>
                        <RaisedButton label="Sign Up" primary={true} onClick={() => this.setState({open: false, openSignUp: true})} />
                </Dialog>
                <Dialog
                  title="Sign Up"
                  modal={false}
                  contentStyle={customContentStyle}
                  style={{padding: -19}}
                  open={this.state.openSignUp}
                  onRequestClose={() => this.setState({openSignUp: false})}>
                        <TextField floatingLabelText="Your name" hintText="Your name"/>
                        <TextField  floatingLabelText="Your email"
                                    hintText="Your email"
                                    onChange={this.handleChange}/>
                        <TextField type="password" floatingLabelText="Your password" hintText="Your password"/>
                        <TextField type="password" floatingLabelText="Confirm password" hintText="Confirm password"/>
                        <br/><br/>
                        <RaisedButton label="Sign Up" style={{marginRight: 50}} primary={true} onClick={this.getValue}/>
                        <RaisedButton label="Sign In" primary={true} onClick={() => this.setState({openSignUp: false, open: true})} />
                </Dialog>
                {this.props.user.text}
            </div>
        );
    }
}

export default SignIn;