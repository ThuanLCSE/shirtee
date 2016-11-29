import React from 'react';
import ReactDOM from 'react-dom';

class ProductImg extends React.Component{

  constructor(props){
    super(props);
  }



  render(){
      return (
        <div className="hovereffect">
            <img className="img-responsive" src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/15230586_1632363410392273_7932220563088524415_n.jpg?oh=ee83d1988ddaf55c8f5688508647c142&oe=58FA0F44" />
            <div className="overlay">
               <h2>Hover effect 9</h2>
               <a className="info" href="#">link here</a>
            </div>
        </div>
      );
  }
};

export default ProductImg;
