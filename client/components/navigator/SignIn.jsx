import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';

//import userTodo from '../stores/UserList';

const customContentStyle = {
    width: '25%',
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
        const changeSignUp = (
            <FlatButton label="Sign Up" primary={true} onClick={() => this.setState({open: false, openSignUp: true})} />
        );
        const changeSignIn = (
            <FlatButton label="Sign In" primary={true} onClick={() => this.setState({openSignUp: false, open: true})} />
        );
        return (
            <List>
                <ListItem primaryText={<b>Sign in</b>} onClick={() => this.setState({open: true})}/>
                <Dialog
                  title={(<p><b>Sign In</b></p>)}
                  modal={false}
                  actions={changeSignUp}
                  contentStyle={customContentStyle}
                  open={this.state.open}
                  onRequestClose={() => this.setState({open: false})}>
                        <TextField  floatingLabelText="Your email"
                                    hintText="Your email"
                                    fullWidth={true}
                                    onChange={(e) => this.handleChange('email', e)}/><br/>
                        <TextField  type="password"
                                    floatingLabelText="Your password"
                                    hintText="Your password"
                                    fullWidth={true}
                                    onChange={(e) => this.handleChange('pwd', e)}/>
                        <br/><br/>
                    <div style={{margin: 'auto', width: '40%'}}>
                        <RaisedButton label="Sign In" fullWidth={true} primary={true} onClick={this.getValueSignIn}/>
                    </div>
                </Dialog>
                <Dialog
                  title={(<p><b>Sign Up</b></p>)}
                  modal={false}
                  actions={changeSignIn}
                  contentStyle={customContentStyle}
                  open={this.state.openSignUp}
                  onRequestClose={() => this.setState({openSignUp: false})}>
                        <TextField  floatingLabelText="Your name"
                                    hintText="Your name"
                                    fullWidth={true}
                                    onChange={(e) => this.handleChange('name', e)}/><br/>
                        <TextField  floatingLabelText="Your email"
                                    hintText="Your email"
                                    fullWidth={true}
                                    onChange={(e) => this.handleChange('email', e)}/><br/>
                        <TextField  type="password"
                                    floatingLabelText="Your password"
                                    hintText="Your password"
                                    fullWidth={true}
                                    onChange={(e) => this.handleChange('pwd', e)}/><br/>
                        <TextField type="password" floatingLabelText="Confirm password" hintText="Confirm password"/>
                        <br/><br/>
                    <div style={{margin: 'auto', width: '40%'}}>
                        <RaisedButton label="Sign Up" fullWidth={true} primary={true} onClick={this.getValueSignUp}/>
                    </div>
                </Dialog>
            </List>
        );
    }
}

export default SignIn;
