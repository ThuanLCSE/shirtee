import React from 'react';
import ReactDOM from 'react-dom';

import Homepage from './home/Homepage';
import PatternView from './home/PatternView';
import Navigator from './navigator/Navigator';
import Information from './user/Information';
import UserAccount from './user/UserAccount';
import NewPattern from './pattern/NewPattern';

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

    bestSell() {
        return (
            <PatternView patternList={this.props.PatternList.listPatternBestSell}
                         getPattern={this.props.PatternAct.GetListBestSell}
                         votePattern={this.props.PatternAct.VotePattern}/>
        );
    }
    
    newest() {
        return (
            <PatternView patternList={this.props.PatternList.listPatternNewest}
                         getPattern={this.props.PatternAct.GetListNewest}
                         votePattern={this.props.PatternAct.VotePattern}/>
        );
    }
    
    promotion() {
        return (
            <PatternView patternList={this.props.PatternList.listPatternSale}
                         getPattern={this.props.PatternAct.GetListSale}
                         votePattern={this.props.PatternAct.VotePattern}/>
        );
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
        console.log('view changed');
        this.setState({
            view : page
        });
    }

    homeView(){
        return (
            <Homepage   patternList={this.props.PatternList}
                        getPattern={this.props.PatternAct}
                        votePattern={this.props.PatternAct.VotePattern}/>
        );
    }
//<Divider/>
//              <h4 style={divStyle}>Promotion </h4>
//              <a style={divStyle} href='#'>View All</a>
//              <GridListFrame patternList={this.props.PatternList}
//                             getPattern={this.props.PatternAct.GetListSell}/>
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
        {this.state.view === 'bestSell'?this.bestSell():null}
        {this.state.view === 'newest'?this.newest():null}
        {this.state.view === 'promotion'?this.promotion():null}
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
