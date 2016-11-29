import React from 'react';
import ReactDOM from 'react-dom';
import GridListFrame from './home/GridListFrame';
import GridListFour from './home/GridListFour';
import Navigator from './Navigator';

const divStyle = {
  color: 'blue'
};



class Home extends React.Component{
  render(){
    return(
      <div className="container">
        <Navigator />
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

export default Home;
