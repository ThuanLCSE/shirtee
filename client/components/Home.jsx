import React from 'react';
import ReactDOM from 'react-dom';
import GridListFrame from './home/GridListFrame';
import GridListFour from './home/GridListFour';
import Navigator from './Navigator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as UserAct from './../actions/ActionSignIn.jsx';

const divStyle = {
  color: 'blue'
};



class Home extends React.Component{
  render(){
    return(
      <div className="container">
        <Navigator signInFunc={this.props.UserAct.SignIn}
                    userData={this.props.UserTodo}
                    signUpFunc={this.props.UserAct.SignUp}/>
        <GridListFrame />
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
)(Home);
