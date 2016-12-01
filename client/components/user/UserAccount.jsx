import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as UserAct from '../../actions/ActionSignIn.jsx';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import SideBar from './SideBar';
import Navigator from '../Navigator';

class UserAccount extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                fullName: 'Nguyen Viet Hung',
                password: '123456',
                oldPwd: '',
                newPwd: '',
                cfmPwd: '',
                email: 'abc@xyz',
                gender: 'male',
                birthday: new Date()
            },
            changePwd: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    
    handleUpdate() {
        alert((this.state.userData.oldPwd == this.state.userData.password &&
               this.state.userData.newPwd == this.state.userData.cfmPwd) ?
              "Update successfully!"
             : "Wrong password or confirm password!!!");
    }
    
    handleChangePwd() {
        this.setState({changePwd: !this.state.changePwd});
    }
    
    handleChange(att, e) {
        var newUser = this.state.userData;
        newUser[att] = e.target.value;
        this.setState({userData: newUser});
    }
    
  render(){
    return(
      <div>
          <Navigator signInFunc={this.props.UserAct.SignIn}
                     userData={this.props.UserTodo}
                     signUpFunc={this.props.UserAct.SignUp}/>
          <div className="container">
            <div className="col-sm-3">
                <SideBar/>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-8">
             <h2>Update your information</h2>
              <table>
                <tr>
                    <td>
                        <label style={{padding: 20}}>Full name:</label>
                    </td>
                    <td>
                        <TextField
                                defaultValue={this.state.userData.fullName}
                                onChange={(e) => this.handleChange('fullName', e)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{padding: 20}}>Gender:</label>
                    </td>
                    <td>
                        <RadioButtonGroup onChange={(e) => this.handleChange('gender', e)}
                                         defaultSelected={this.state.userData.gender == "male" ? "male" : "female"}>
                          <RadioButton value="male" label="Male"/>
                          <RadioButton value="female" label="Female"/>
                        </RadioButtonGroup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{padding: 20}}>Date of birth:</label>
                    </td>
                    <td>
                        <DatePicker defaultDate={this.state.userData.birthday}
                                    mode="landscape"
                                    onChange={(e) => this.handleChange('birthday', e)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{padding: 20}}>Email:</label>
                    </td>
                    <td>
                        <TextField
                                defaultValue={this.state.userData.email}
                                onChange={(e) => this.handleChange('email', e)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <Checkbox label="Change password" onCheck={this.handleChangePwd}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{padding: 20}}>Old password:</label>
                    </td>
                    <td>
                         <TextField  type="password"
                                hintText="Old password"
                                disabled={this.state.changePwd}
                                onChange={(e) => this.handleChange('oldPwd', e)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{padding: 20}}>New password:</label>
                    </td>
                    <td>
                         <TextField  type="password"
                                hintText="New password"
                                disabled={this.state.changePwd}
                                onChange={(e) => this.handleChange('newPwd', e)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{padding: 20}}>Confirm:</label>
                    </td>
                    <td>
                         <TextField  type="password"
                                hintText="Confirm password"
                                disabled={this.state.changePwd}
                                onChange={(e) => this.handleChange('cfmPwd', e)}/>
                    </td>
                </tr>
              </table>
                {this.state.userData.fullName}
                {this.state.userData.email}
                {this.state.userData.gender}
                {this.state.userData.oldPwd}
                {this.state.userData.newPwd}
                {this.state.userData.cfmPwd}
             <RaisedButton label="Update" primary={true} onClick={this.handleUpdate}/>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserTodo: state.UserTodo
});

const mapDispatchToProps = dispatch => ({
    UserAct: bindActionCreators(UserAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAccount);