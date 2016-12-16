import React from 'react'; 
import {hostServer, shirtImgSize} from './../../constant/ApiUri';
import RaisedButton from 'material-ui/RaisedButton';

class CanvasEditor extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {           
            canvas: {
              height: 100,
              width: 100
            }  
        };
      
        this.mainCanvas = this.mainCanvas.bind(this); 

    } 
    componentDidMount() { 
	      var mountedCanvas = this.state.canvas; 
	      mountedCanvas.width = document.getElementById('tshirtFacing').clientWidth;
	      mountedCanvas.height = mountedCanvas.width * shirtImgSize;
	      this.setState({ canvas: mountedCanvas });
    }
    canvasControl(){
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

              <div className="pull-right"  id="imageeditor">
                <RaisedButton  id="remove-selected" label={<i className="fa fa-trash" aria-hidden="true">Remove</i>} secondary={true}/> 
              </div>
          )
      }
   	mainCanvas(){

        let drawingAreae = {
          position: 'absolute', 
          top: 0,
          left: 0,
          zIndex: 100, 
          width: '100%',
          height: '100%'
        }
        let webKitUser = {
          width: '100%',
          height: '100%',
          WebkitUserSelect : 'none'
        }
        let shirtDiv = {
            width: '100%',

            position: 'relative'
        }
        let shirtFacing = { 
            width: '100%',
            height: '100%'
        }
        let platform = {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 100,
          width: '100%',
          height: '100%',

        }

        return(
              <div id="shirtDiv" className="page" style={shirtDiv}>
                <img src={hostServer + '/' + "static/platform.png"} style={shirtFacing}></img>
                <div id="drawingArea" style={drawingAreae}>
                  <img id="tshirtFacing" className = "shirtLayout" style={platform}/>
                  <canvas id="shirtCanvas" height={this.state.canvas.height}
                  width={this.state.canvas.width}
                   className="hover" style={webKitUser}>
                  </canvas>
                </div>
              </div>
        )
    }
    render() { 
        return (
           <div>
           		{this.mainCanvas()}
                {this.canvasControl()}
           </div>
        );
    }
}

export default CanvasEditor;