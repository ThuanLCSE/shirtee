import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import SideBar from './SideBar';

class Information extends React.Component{
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.viewInfo();
    }
    
  render(){
    return(
      <div className="container">
        <div className="col-sm-3">
            <SideBar changeView = {this.props.changeView}
                     userData = {this.props.userData}
                     becomeNewDesigner={this.props.becomeNewDesigner}/>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-8">
         <h2>Information</h2>
         {this.props.userData.user ?
          <table>
           <tbody>
            <tr>
                <td>
                    <label style={{padding: 20}}>Full name:</label>
                </td>
                <td>
                    <p>{this.props.userData.user.fullname}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <label style={{padding: 20}}>Gender:</label>
                </td>
                <td>
                    <p>{this.props.userData.user.gender?this.props.userData.user.gender:null}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <label style={{padding: 20}}>Date of birth:</label>
                </td>
                <td>
                    <p>{this.props.userData.user.birthday? (new Date(this.props.userData.user.birthday)).toLocaleDateString() : null}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <label style={{padding: 20}}>Email:</label>
                </td>
                <td>
                    <p>{this.props.userData.user.email}</p>
                </td>
            </tr>
           </tbody>
          </table> : null}
         <RaisedButton label="Update your information" onClick={() => this.props.changeView('accUpdate')} primary={true}/>
        </div>
      </div>
    );
  }
}
export default Information;