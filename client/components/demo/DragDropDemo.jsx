 
import React from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';  

class DragDropDemo extends React.Component{
  constructor(props) {
      super(props);
      this.state= { 
        colorCodeList : ['#ffffff', '#616161', '#f0f0f0', '#5b5b5b', '#222222', '#fc8d74','#432d26','#eead91',
                        '#806355', '#382d21', '#faef93','#aeba5e','#8aa140']
	    };
      this.customItem = this.customItem.bind(this);
    } 
  header(){
    return (
        <div className="page-header">
          <h1>Customize T-Shirt</h1>
        </div>
      )
  }
  imageEditor(){
    let styleAlignCenter = {
      minHeight : 32,
      align: 'center'
    }
    let displayBlock = {
      display : 'block'
    }
    let height19 = {
      height : 19
    }

    return(
        <div style={styleAlignCenter} > 
          <div className="pull-right"  id="imageeditor" style={displayBlock}> 
                <button id="remove-selected" className="btn" title="Delete selected item">
                    <i style={height19}>delete </i>
                </button> 
          </div>        
        </div>    
      )
  }
  patternChosen(){
    let cusorPointer = {
      cursor : 'pointer'
    }
    return( 
          <img style={cusorPointer} className="img-polaroid" src="static/invisibleman.jpg"/> 
      )
  }
  
  editor(){
    let pageStyle = {
      width: 530,
      height: 630,
      position: 'relative',
      backgroundColor: 'rgb(255, 255, 255)'
    }
    let drawingAreae = {
      position: 'absolute',
      top: 100,
      left: 160,
      zIndex: 100,
      width: 200,
      height: 400
    }
    let webKitUser = {
      WebkitUserSelect : 'nonne'
    }
    return(
          <div id="shirtDiv" className="page" style={pageStyle}>
            <img id="tshirtFacing" src="static/TeeShirt1.png"></img>
            <div id="drawingArea" style={drawingAreae}>         
              <canvas id="tcanvas" width="200" height="400" className="hover" style={webKitUser}>
              
              </canvas>
            </div>
          </div>  
      )
  }
  shirtTypeList(){
    return (
      <div className="form-group form-inline"> 
       <div className="row">
            <div className="col-sm-5">
               <img id="shirt1" className="img-responsive shirtTypes" src="./static/TeeShirt1.png"/>
            </div>
            <div className="col-sm-5">
               <img id="shirt3" className="img-responsive shirtTypes" src="./static/TeeShirt3.png"/>
            </div>   
       </div>

       <div className="row">
          <div className="col-sm-5"> 
               <img id="shirt2" className="img-responsive shirtTypes" src="./static/TeeShirt2.png"/>
            </div>
            
            <div className="col-sm-5">
               <img id="shirt4" className="img-responsive shirtTypes" src="./static/TeeShirt4.png"/>
            </div>
       </div>             
      </div>
    )
  }
  colorItem(currentValue){
    let background = {
      backgroundColor: currentValue
    }
    return (
         <li className="color-preview" title="White" style={background}></li>
      )
  }
  customItem(){

    return (
      <div className="form"> 
            <div className="well">
              <ul className="row">
                {this.state.colorCodeList.map(this.colorItem)} 
              </ul>
            </div>

          {this.shirtTypeList()}       
           <button className="btn btn-success">Create Pattern</button> 
    </div>  
    )
  }
  dragDrop(){
    return (
        <div className="preview" data-spy="scroll" data-target=".subnav" data-offset="80">  
            <div className="container">
                <section id="typography">
                  {this.header()}
                 
                  <div className="row">     
                    <div className="col-sm-4">
                      {this.patternChosen()} 
                    </div>
                    <div className="col-sm-5">    
                      {this.imageEditor()}
                       {this.editor()}
                    </div>     
                    <div className="col-sm-3">   
                      {this.customItem()}
                    </div> 
                  </div>
                </section>
             </div> 
        </div>
      )
  }
  render(){
    return(
      <div>
          {this.dragDrop()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // UserTodo: state.UserTodo
});

const mapDispatchToProps = dispatch => ({
    // UserAct: bindActionCreators(UserAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragDropDemo);
