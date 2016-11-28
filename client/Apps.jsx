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

let store = createStore(RootReducers);
injectTapEventPlugin();

class Apps extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SignIn SignInFunc={this.props.UserAct.SignIn}
                user={this.props.UserTodo}
            />
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
            <ConnectedApp />
        </MuiThemeProvider>
    </Provider>,
  document.getElementById('main')
);
}