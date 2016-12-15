import React from 'react';
import ReactDOM from 'react-dom';

import GridListFrame from './home/GridListFrame';
import GridListFour from './home/GridListFour';
import Navigator from './navigator/Navigator';
import CarouselModal from './home/CarouselModal';
import Information from './user/Information';
import UserAccount from './user/UserAccount';
import NewPattern from './pattern/NewPattern';

import Divider from 'material-ui/Divider';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as UserAct from './../actions/ActionSignIn.jsx';
import * as CategoryAct from './../actions/CategoryAction.jsx';
import * as ShirtAct from './../actions/ShirtAction.jsx';
import * as PatternAct from './../actions/PatternAction.jsx';
import * as DesignerAct from './../actions/DesignerAction.jsx';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            view: 'home'
        };
        this.changeStateView = this.changeStateView.bind(this);
    }

    infoView() {
        return (
           <Information userData = {this.props.UserTodo}
                        viewInfo = {this.props.UserAct.ViewInfo}
                        changeView = {this.changeStateView}
                        becomeNewDesigner={this.props.UserAct.BecomeNewDesigner}/>
        );
    }

    accUpdateView() {
        return (
           <UserAccount userData = {this.props.UserTodo}
                        updateInfo = {this.props.UserAct.UpdateInfo}
                        viewInfo = {this.props.UserAct.ViewInfo}
                        changeView = {this.changeStateView}
                        becomeNewDesigner={this.props.UserAct.BecomeNewDesigner}/>
        );
    }

    CreatePattern() {
        return (
           <NewPattern categoryList={this.props.CategoryList}
                      getCategory={this.props.CategoryAct.GetList}
                      userData={this.props.UserTodo}
                      getListShirt ={this.props.ShirtAct.GetList}
                      shirtData = {this.props.ShirtList}
                      designerList={this.props.DesignerList}
                    uploadPattern={this.props.DesignerAct.UploadPattern}/>
        );
    }

    changeStateView(page){
        console.log('view thay doi');
        this.setState({
            view : page
        });
    }

    homeView(){
        return (
            <div className="container">
              <GridListFrame patternList={this.props.PatternList.listPattern}
                             getPattern={this.props.PatternAct.GetList}
                             index={0}/>
              <br/>
              <div className="title-line">
                <h4>Best Sell</h4>
              </div>
              <br/>
              <GridListFrame patternList={this.props.PatternList.listPatternBestSale}
                             getPattern={this.props.PatternAct.GetListBestSell}
                             index={0}/>
              <br/><br/>
              <GridListFrame patternList={this.props.PatternList.listPatternBestSale}
                             getPattern={this.props.PatternAct.GetListBestSell}
                             index={1}/>
              <br/>
              <div className="title-line">
                <h4>Newest</h4>
              </div>
              <br/>
              <GridListFrame patternList={this.props.PatternList.listPatternNewest}
                             getPattern={this.props.PatternAct.GetListNewest}
                             index={0}/>
              <br/><br/>
              <GridListFrame patternList={this.props.PatternList.listPatternNewest}
                             getPattern={this.props.PatternAct.GetListNewest}
                             index={1}/>
            </div>
        );
    }
//<Divider/>
//              <h4 style={divStyle}>Promotion </h4>
//              <a style={divStyle} href='#'>View All</a>
//              <GridListFrame patternList={this.props.PatternList}
//                             getPattern={this.props.PatternAct.GetListSale}/>
  render(){
    return(
      <div>
        
        <Navigator changeView = {this.changeStateView}
                   signInFunc={this.props.UserAct.SignIn}
                    userData={this.props.UserTodo}
                    signUpFunc={ this.props.UserAct.SignUp }
                    becomeNewDesigner={this.props.UserAct.BecomeNewDesigner}
                    checkSignIn={this.props.UserAct.CheckSignIn}
                    signOutFunc={this.props.UserAct.UserSignOut}
                    categoryList={this.props.CategoryList}
                    getCategory={this.props.CategoryAct.GetList}/>
          {this.state.view === 'home'?this.homeView():null}
           {this.state.view === 'info'?this.infoView():null}
           {this.state.view === 'accUpdate'?this.accUpdateView():null}
           {this.state.view === 'NewPattern'?this.CreatePattern():null}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserTodo: state.UserTodo,
  CategoryList: state.CategoryList,
  PatternList: state.PatternList,
   ShirtList: state.ShirtList
});

const mapDispatchToProps = dispatch => ({
  UserAct: bindActionCreators(UserAct, dispatch),
  CategoryAct: bindActionCreators(CategoryAct, dispatch),
  ShirtAct: bindActionCreators(ShirtAct, dispatch),
  PatternAct: bindActionCreators(PatternAct, dispatch),
  DesignerAct: bindActionCreators(DesignerAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
