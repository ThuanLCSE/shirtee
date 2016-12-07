import React from 'react';
import ReactDOM from 'react-dom';
import GridListFrame from './home/GridListFrame';
import GridListFour from './home/GridListFour';
import Navigator from './Navigator';
//import CarouselLogo from './CarouselLogo';
import CarouselModal from './CarouselModal';
import Information from './user/Information';
import UserAccount from './user/UserAccount';
import NewShirt from './pattern/NewShirt';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as UserAct from './../actions/ActionSignIn.jsx';
import * as CategoryAct from './../actions/CategoryAction.jsx';
import * as PatternAct from './../actions/PatternAction.jsx';
import * as DesignerAct from './../actions/DesignerAction.jsx';

const divStyle = {
  color: 'blue'
};



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
           <Information userData = {this.props.UserTodo}/>
        );
    }
    
    accUpdateView() {
        return (
           <UserAccount userData = {this.props.UserTodo}
                        updateInfo = {this.props.UserAct.UpdateInfo}/>
        );
    }
    
    newShirt() {
        return (
           <NewShirt categoryList={this.props.CategoryList}
                     getCategory={this.props.CategoryAct.GetList}
                     userData={this.props.UserTodo}
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
            <z>
              <a href="admins">Go to Admin </a>
                <div className="container">
                  <GridListFrame patternList={this.props.PatternList}
                                 getPattern={this.props.PatternAct.GetList}/>    
                  <h3 style={divStyle}>Best Sell </h3>
                  <a href="#">View All</a>
                  <GridListFour />
                  <h3 style={divStyle}>Newest </h3>
                  <a href='#'>View All</a>
                  <GridListFour />
                  <h3 style={divStyle}>Promotion </h3>
                  <a href='#'>View All</a>
                  <GridListFour />
                </div>
            </z>
        );
    }
    
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
           {this.state.view === 'newShirt'?this.newShirt():null}
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserTodo: state.UserTodo,
  CategoryList: state.CategoryList,
  PatternList: state.PatternList,
  DesignerList: state.DesignerList
});

const mapDispatchToProps = dispatch => ({
  UserAct: bindActionCreators(UserAct, dispatch),
  CategoryAct: bindActionCreators(CategoryAct, dispatch),
  PatternAct: bindActionCreators(PatternAct, dispatch),
  DesignerAct: bindActionCreators(DesignerAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
