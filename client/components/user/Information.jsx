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

class Information extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                fullName: 'Nguyen Viet Hung',
                email: 'abc@xyz',
                gender: 'male',
                birthday: new Date()
            },
        };
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
             <h2>Information</h2>
              <table>
                <tr>
                    <td>
                        <label style={{padding: 20}}>Full name:</label>
                    </td>
                    <td>
                        <p>{this.state.userData.fullName}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{padding: 20}}>Gender:</label>
                    </td>
                    <td>
                        <p>{this.state.userData.gender}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{padding: 20}}>Date of birth:</label>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label style={{padding: 20}}>Email:</label>
                    </td>
                    <td>
                        <p>{this.state.userData.email}</p>
                    </td>
                </tr>
              </table>
             <RaisedButton label="Update your information" primary={true}/>
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
)(Information);