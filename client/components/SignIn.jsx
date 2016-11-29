import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

import userTodo from '../stores/UserList';

const customContentStyle = {
    width: '30%',
    maxWidth: 'none'
};

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            user: {
                email: '',
                pwd: '',
                name: ''
            },
            openSignUp: false
        };
        this.getValueSignIn = this.getValueSignIn.bind(this);
        this.getValueSignUp = this.getValueSignUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    getValueSignIn() {
        var userData = this.state.user;
        this.props.signInFunc(userData);
//        this.setState({open: false, openSignUp: false});
    }
    
    getValueSignUp() {
        var userData = this.state.user;
        this.props.signUpFunc(userData);
//        this.setState({open: false, openSignUp: false});
    }
    
    handleChange(att, e) {
        var newUser = this.state.user;
        newUser[att] = e.target.value;
        this.setState({user: newUser});
    }
    
    render() {
        return (
            <List>
                <ListItem primaryText="Sign in" onClick={() => this.setState({open: true})}/>
                <Dialog
                  title="Sign In"
                  modal={false}
                  contentStyle={customContentStyle}
                  style={{padding: -19}}
                  open={this.state.open}
                  onRequestClose={() => this.setState({open: false})}>
                        <TextField  floatingLabelText="Your email"
                                    hintText="Your email"
                                    onChange={(e) => this.handleChange('email', e)}/>
                        <TextField  type="password"
                                    floatingLabelText="Your password"
                                    hintText="Your password"
                                    onChange={(e) => this.handleChange('pwd', e)}/>
                        <br/><br/>
                        <RaisedButton label="Sign In" style={{marginRight: 50}} primary={true} onClick={this.getValueSignIn}/>
                        <RaisedButton label="Sign Up" primary={true} onClick={() => this.setState({open: false, openSignUp: true})} />
                        {this.props.userData.text}
                </Dialog>
                <Dialog
                  title="Sign Up"
                  modal={false}
                  contentStyle={customContentStyle}
                  style={{padding: -19}}
                  open={this.state.openSignUp}
                  onRequestClose={() => this.setState({openSignUp: false})}>
                        <TextField  floatingLabelText="Your name"
                                    hintText="Your name"
                                    onChange={(e) => this.handleChange('name', e)}/>
                        <TextField  floatingLabelText="Your email"
                                    hintText="Your email"
                                    onChange={(e) => this.handleChange('email', e)}/>
                        <TextField  type="password" 
                                    floatingLabelText="Your password"
                                    hintText="Your password"
                                    onChange={(e) => this.handleChange('pwd', e)}/>
                        <TextField type="password" floatingLabelText="Confirm password" hintText="Confirm password"/>
                        <br/><br/>
                        <RaisedButton label="Sign Up" style={{marginRight: 50}} primary={true} onClick={this.getValueSignUp}/>
                        <RaisedButton label="Sign In" primary={true} onClick={() => this.setState({openSignUp: false, open: true})} />
                </Dialog>
            </List>
        );
    }
}

export default SignIn;