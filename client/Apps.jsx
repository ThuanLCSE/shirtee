import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RootReducers from './stores/RootReducers.jsx';
import * as UserAct from './actions/ActionSignIn.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import BottomNavigationSimple from './components/BottomNavigationSimple';
//import HelloWorld from './components/HelloWorld';
import SignIn from './components/SignIn';

//
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
// import Component
import Home from './components/Home';


let store = createStore(RootReducers);
injectTapEventPlugin();

class Apps extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Home />
        );
    }
}

const mapStateToProps = state => ({
  UserTodo: state.UserTodo
});

const mapDispatchToProps = dispatch => ({
    UserAct: bindActionCreators(UserAct, dispatch),
});

var ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Apps);

if(typeof window !== 'undefined') {
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
        <Router history = {browserHistory}>
            <Route path = "/" component = {ConnectedApp}>
               <IndexRoute component = {Home} />
               <Route path = "home" component = {ConnectedApp} />
               <Route path = "about" component = {ConnectedApp} />
               <Route path = "contact" component = {ConnectedApp} />
            </Route>
          </Router>

        </MuiThemeProvider>
    </Provider>,
  document.getElementById('main')
);
}
