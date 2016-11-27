import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HelloWorld from './components/HelloWorld';

//let store = createStore();

const App = () => (
  <MuiThemeProvider>
    <HelloWorld/>
  </MuiThemeProvider>
);

injectTapEventPlugin();

if(typeof window !== 'undefined') {
ReactDOM.render(
  <App />,
  document.getElementById('main')
);
}