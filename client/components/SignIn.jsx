import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import userTodo from '../stores/UserList';

const customContentStyle = {
  width: '20%',
  maxWidth: 'none',
};

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            email: '',
        };
        this.getValue = this.getValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    getValue() {
        this.props.SignInFunc(this.state.email, '123456');
        this.setState({open: false});
    }
    
    handleChange(e) {
        this.setState({email:e.target.value});
    }
    
    render() {
        return (
            <div>
                <RaisedButton label="Sign in" onClick={() => this.setState({open: true})} />
                <Dialog
                  modal={false}
                  contentStyle={customContentStyle}
                  open={this.state.open}
                  onRequestClose={() => this.setState({open: false})}
                >
                    <h1>Sign In</h1>
                    <TextField  id="email"
                                floatingLabelText="Your email"
                                hintText="Your email"
                                onChange={this.handleChange}/><br/>
                    <TextField id="pwd" type="password" floatingLabelText="Your password" hintText="Your password"/>
                    <br/><br/>
                    <RaisedButton label="Sign In" onClick={this.getValue}/>
                </Dialog>
                {this.props.user.text}
            </div>
        );
    }
}

export default SignIn;