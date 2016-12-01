import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';




class Admin extends React.Component{
    render(){
      return (
          <div>
            <a href="/">Home</a>
            <a href="admin-upload">Upload</a>
            <a href="admin-view-pattern">View Pattern</a>
            <a href="admin-view-sell-program">View sell program</a>
            <a href="admin-create-sell-program">Create new sale program</a>
          </div>
      );
    }
};

export default Admin;
