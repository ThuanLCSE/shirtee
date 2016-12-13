import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


import * as PatternAct from './../actions/PatternAction.jsx'; 
import * as ShirtAct from './../actions/ShirtAction.jsx';
import * as SaleAct from './../actions/SaleAction.jsx';

import * as AdminAct from './../actions/ActionAdminSignIn.jsx';
import AdminSignIn from './admins/AdminSignIn';
import UpLoadShirt from './admins/UpLoadShirt';
import ListPattern from './admins/ListPattern';
import ViewSaleProgram from './admins/ViewSaleProgram';
import CreateSaleProgram from './admins/CreateSaleProgram';
import ListShirt from './admins/ListShirt';
import DelShirt from './admins/DelShirt';

class Admin extends React.Component{
  constructor(props) {
      super(props);
      this.state = { 
          view: 'sign In'
      };
      this.changeViewDropdown = this.changeViewDropdown.bind(this);
      this.listPattern = this.listPattern.bind(this);
      this.viewSale = this.viewSale.bind(this);
      this.adminHome = this.adminHome.bind(this);
      this.signInAdmin = this.signInAdmin.bind(this);
      this.uploadShirt = this.uploadShirt.bind(this);

  }
  
  deleteShirt(){
    console.log("goto: delete shirt");
    return (
          <DelShirt
            delShirt = {this.props.ShirtAct.removeShirt}
            shirtData={this.props.ShirtList} />
    )
  }
    
  getListShirt(){
    console.log("goto: get list shirt");
    return (
        <ListShirt
        getListShirt = {this.props.ShirtAct.GetList}
        shirtData={this.props.ShirtList}  />
    )
  }
    
  listPattern(){
    return(
      <ListPattern
              getListPattern = {this.props.PatternAct.GetListByAdmin} 
              AdminStore={this.props.AdminTodo} 
              PatternList={this.props.PatternList}
              approvePattern={this.props.PatternAct.ApprovePattern}
              deletePattern={this.props.PatternAct.DeletePattern}/>
    );
  }
    
  createSale() {
      return (
        <CreateSaleProgram
            getListPattern = {this.props.PatternAct.GetListByAdmin}
            PatternList = {this.props.PatternList}
            createSale = {this.props.SaleAct.CreateSale}/>
      );
  }
    
  viewSale() {
      return (
        <ViewSaleProgram
            getListSale={this.props.SaleAct.GetSale}
            saleList={this.props.SaleList}/>
      );
  }
 
  uploadShirt(){ 
      return (
        <UpLoadShirt
          uploadShirt = {this.props.ShirtAct.UpLoadShirt} 
          uploadMessage={this.props.ShirtList.message}  />
      )
  }

  changeViewDropdown(event, index, value){
      console.log('view thay doi '+ value);
      this.setState({
          view : value
      });
  }
  adminHome(){
    return(
 
      <DropDownMenu value={this.state.view} onChange={this.changeViewDropdown}>
          <MenuItem value='upload shirt' primaryText="Upload shirt" />
          <MenuItem value='list pattern' primaryText="View Pattern" />
          <MenuItem value='sell program' primaryText="View sell program" />
          <MenuItem value= 'create sell program' primaryText="Create new sale program" />
          <MenuItem value='list shirt' primaryText= "Get List shirt" />
          <MenuItem value='delete shirt' primaryText= "Delete shirt" />
        </DropDownMenu>
    )
  }
  signInAdmin(){
    return(
      <AdminSignIn
            signInFunc={this.props.AdminAct.SignIn} 
            adminData={this.props.AdminTodo} />
    )
  }

    render(){
      return (
          <div>
          {this.props.AdminTodo.signInSuccess?this.adminHome():this.signInAdmin()}
          {this.state.view === 'upload shirt'?this.uploadShirt():null}
          {this.state.view === 'list shirt'?this.getListShirt():null}
          {this.state.view === 'delete shirt'?this.deleteShirt():null}
          {this.state.view === 'list pattern'?this.listPattern():null}
          {this.state.view === 'sell program'?this.viewSale():null}
          {this.state.view === 'create sell program'? this.createSale():null}
          </div>
      );
    }
};


const mapStateToProps = state => ({ 
  AdminTodo: state.AdminTodo,
  ShirtList: state.ShirtList,
  PatternList: state.PatternList,
  SaleList: state.SaleList
});
const mapDispatchToProps = dispatch => ({
  AdminAct: bindActionCreators(AdminAct, dispatch),
  PatternAct: bindActionCreators(PatternAct, dispatch), 
  ShirtAct: bindActionCreators(ShirtAct, dispatch),
  SaleAct: bindActionCreators(SaleAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
