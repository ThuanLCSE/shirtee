import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import SideBar from './SideBar';

class UserAccount extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                id: this.props.userData.user._id,
                fullname: this.props.userData.user.fullname,
                password: this.props.userData.user.password,
                oldPwd: '',
                newPwd: '',
                cfmPwd: '',
                gender: this.props.userData.user.gender,
                birthday: new Date(this.props.userData.user.birthday)
            },
            changePwd: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeBirthday = this.handleChangeBirthday.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    
    handleUpdate() {
        if (this.state.userData.oldPwd !== this.state.userData.password) {
            alert ("Wrong password!");
            return;
        }
        if (this.state.changePwd)
            if (this.state.userData.newPwd !== this.state.userData.cfmPwd) {
                alert("Wrong confirm password!");
                return;
            }
            else {
                var newUser = this.state.userData;
                newUser.password = newUser.newPwd;
                this.setState({userData: newUser});
            };
        var userData = this.state.userData;
        this.props.updateInfo(userData);
    }
    
    handleChangePwd() {
        this.setState({changePwd: !this.state.changePwd});
    }
    
    handleChange(att, e) {
        var newUser = this.state.userData;
        newUser[att] = e.target.value;
        this.setState({userData: newUser});
    }
    
    handleChangeBirthday(e, date) {
        var newUser = this.state.userData;
        newUser.birthday = date;
        this.setState({userData: newUser});
    }
    
    getValueSignIn() {
        var userData = this.state.user;
        this.props.signInFunc(userData);
    } 
    
  render(){
    return(
      <div className="container">
        <div className="col-sm-3">
            <SideBar/>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-8">
         <h2>Update your information</h2>
         {this.props.userData.user ?
          <z>
          <table>
            <tr>
                <td>
                    <label style={{padding: 20}}>Full name:</label>
                </td>
                <td>
                    <TextField
                            name="Update Name"
                            defaultValue={this.props.userData.user.fullname}
                            onChange={(e) => this.handleChange('fullname', e)}/>
                </td>
            </tr>
            <tr>
                <td>
                    <label style={{padding: 20}}>Gender:</label>
                </td>
                <td>
                    <RadioButtonGroup name="gender" onChange={(e) => this.handleChange('gender', e)}
                                     defaultSelected={this.props.userData.user.gender ? this.props.userData.user.gender : null}>
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
                    {this.props.userData.user.birthday ?
                    <DatePicker defaultDate={new Date(this.props.userData.user.birthday)}
                                mode="landscape"
                                onChange={(e, date) => this.handleChangeBirthday(e, date)}/> : 
                    <DatePicker floatingLabelText="Date of birth"
                                mode="landscape"
                                onChange={(e, date) => this.handleChangeBirthday(e, date)}/>
                    }
                </td>
            </tr>
            <tr>
                <td>
                    <label style={{padding: 20}}>Current password:</label>
                </td>
                <td>
                     <TextField 
                            name="Check pwd"
                            type="password"
                            hintText="Current password"
                            onChange={(e) => this.handleChange('oldPwd', e)}/>
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
                    <label style={{padding: 20}}>New password:</label>
                </td>
                <td>
                     <TextField
                            name="New pwd"
                            type="password"
                            hintText="New password"
                            disabled={!this.state.changePwd}
                            onChange={(e) => this.handleChange('newPwd', e)}/>
                </td>
            </tr>
            <tr>
                <td>
                    <label style={{padding: 20}}>Confirm:</label>
                </td>
                <td>
                     <TextField
                            name="Comfirm pwd"
                            type="password"
                            hintText="Confirm password"
                            disabled={!this.state.changePwd}
                            onChange={(e) => this.handleChange('cfmPwd', e)}/>
                </td>
            </tr>
          </table>
         <RaisedButton label="Update" primary={true} onClick={this.handleUpdate}/>
        </z> : null}
        </div>
      </div>
    );
  }
}

export default UserAccount;