import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';

import RootReducers from './stores/RootReducers.jsx';
import * as UserAct from './actions/ActionSignIn.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SignIn from './components/SignIn';
import Navigator from './components/Navigator';
import SideBar from './components/SideBar';
import CheckOut from './components/CheckOut';
import Bill from './components/Bill';

//
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
// import Component
import Home from './components/Home';
import Admin from './components/Admin';
import UpLoadShirt from './components/admin/UpLoadShirt';
import ViewAdminPattern from './components/admin/ViewAdminPattern';
import ViewSellProgram from './components/admin/ViewSellProgram';
import CreateSellProgram from './components/admin/CreateSellProgram';



let store = createStore(
  RootReducers,
  applyMiddleware(thunk)
);
injectTapEventPlugin();

class Apps extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <Home />
            <UpLoadShirt />
            <Admin />
            <ViewAdminPattern />
            <ViewSellProgram />
            <CreateSellProgram />
            {this.props.children}
          </div>
        );
    }
}

//const mapStateToProps = state => ({
//  UserTodo: state.UserTodo
//});
//
//const mapDispatchToProps = dispatch => ({
//    UserAct: bindActionCreators(UserAct, dispatch),
//});
//
//var ConnectedApp = connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(Apps);
//   <Route path = "home" component = {ConnectedApp} />
//               <Route path = "about" component = {ConnectedApp} />
//               <Route path = "contact" component = {ConnectedApp} />

// <Route path="admins">
//   <IndexRoute component={Admin}/>
//   <Route path="/admin-upload" component = {UpLoadShirt} />
// </Route>


if(typeof window !== 'undefined') {
  console.log("Router");
  ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
        <Router history = {browserHistory}>
                <Route path = "/" component = {Home}/>
                <Route path = "admins"  component = {Admin} />
                <Route path = "admin-upload" component = {UpLoadShirt} />
                <Route path = "admin-view-pattern" component = {ViewAdminPattern} />
                <Route path = "admin-view-sell-program" component = {ViewSellProgram} />
                <Route path = "admin-create-sell-program" component = {CreateSellProgram} />
          </Router>
        </MuiThemeProvider>
    </Provider>,
  document.getElementById('main')
);
}
