import React from 'react';

class DesignShirt extends React.Component{
    constructor(props){
      super(props);

    }

    render(){
      return(
          <div>
              <div className = "container">
                  <div className = "row">
                    <p> Recommend Design </p>
                  </div>
                  <div className = "row">
                    <p> Color picker </p>
                    <br/>
                    <div className = "colorPicker">
                    </div>
                  </div>
                  <div className = "row">
                    <p> Style </p>
                    <br/>
                    <div className = "styleFrame">
                    </div>
                  </div>

                  <div className = "row">
                    <button>Ok</button>
                  </div>
              </div>
          </div>

      );
    }



}

export default DesignShirt;
