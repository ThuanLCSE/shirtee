import React from 'react';
import ReactDOM from 'react-dom';

class ProductImg extends React.Component{

  constructor(props){
    super(props);
  }



  render(){
      return (
          <div>
            <div className="hovereffect">
              <img className="img-responsive" src="http://placehold.it/300x300" />
                  <div className="overlay">
                      <h2>Hover effect 8</h2>
                      <p className="set1">
                          <a href="#">
                              <i className="fa fa-twitter"></i>
                          </a>
                          <a href="#">
                              <i className="fa fa-facebook"></i>
                          </a>
                      </p>

                      <p className="set2">
                          <a href="#">
                              <i className="fa fa-instagram"></i>
                          </a>
                          <a href="#">
                              <i className="fa fa-dribbble"></i>
                          </a>
                      </p>
                  </div>

            </div>
      </div>


      );
  }
};

export default ProductImg;
