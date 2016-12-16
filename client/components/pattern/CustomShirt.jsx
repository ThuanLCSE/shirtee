import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import {hostServer} from './../../constant/ApiUri';
import CanvasEditor from './../utils/CanvasEditor.jsx';
import cookie from 'react-cookie';

import DialogMessage from './../utils/DialogMessage.jsx'; 


class CustomShirt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	initiated : false,
            imgPaternTagId : 'customShirtTagId', 
             message: '',
            recommend: { 
              x:this.props.pattern.recommendPattern.position.x,
              scale: this.props.pattern.recommendPattern.size,
              rotate: this.props.pattern.recommendPattern.rotate,
              y:this.props.pattern.recommendPattern.position.y
            }, 
            canvas: {
              height: 100,
              width: 100
            } 
        };  
        this.submitAfterHavePreview = this.submitAfterHavePreview.bind(this);
        this.resetMessage = this.resetMessage.bind(this); 
        this.listTypeShirt = this.listTypeShirt.bind(this);
        this.shirtItem = this.shirtItem.bind(this);
        this.colorItem = this.colorItem.bind(this);

 
         this.customBar = this.customBar.bind(this);
         this.changeShirtType = this.changeShirtType.bind(this);
         this.changeColorCode = this.changeColorCode.bind(this);
        
         this.callAddPatternToShirt = this.callAddPatternToShirt.bind(this);
         this.handleChangeRecommend = this.handleChangeRecommend.bind(this);
         this.callApplyShirtCanvas = this.callApplyShirtCanvas.bind(this);
     
    }
    addToCart(e){
      cookie.save('userId', e.target.value, { path: '/' });
    } 
    componentWillMount(){ 
      this.props.getListShirt();
    } 

    callAddPatternToShirt(top, left, scale){
      var patternId = this.state.imgPaternTagId;
      var addPatternToShirt = document.getElementById('addPatternToShirt').click(patternId, top, left, scale); 
    }

    callApplyShirtCanvas(){ 
      document.getElementById('applyShirtCanvas').click(this.props.shirtData.currentSelect); 
    }
    callApplyColorChange(){ 
     document.getElementById('applyColorChange').click(); 
    }
    componentDidUpdate(prevProps, prevState){
   		if (!this.state.initiated && this.props.shirtData.listShirt.length > 0){
   			this.callApplyShirtCanvas();
   			this.callAddPatternToShirt(this.state.recommend.x,this.state.recommend.y,this.state.recommend.scale);  
   			this.setState({ initiated: true }); 
   		}
         
     	 if (prevProps.shirtData.currentSelect !== this.props.shirtData.currentSelect){
       	 this.callApplyColorChange();
         this.changeColorCode(this.props.pattern.recommendShirt.colorCode);
         var recommendColor =  document.getElementById(this.props.pattern.recommendShirt.colorCode);
         if (recommendColor) recommendColor.click(); 
    	}
    } 

    handleChangeRecommend(att, e) {
        var newRecommend = this.state.recommend;
        newRecommend[att] = e.target.value;
        this.setState({
          recommend: newRecommend
        });
    }
 
    takePreviewBeforSubmit() {
      document.getElementById('screenShot').click(); 
    }
    submitAfterHavePreview(e) {
         
        var newShirt = this.props.shirtData.listShirt[this.props.shirtData.currentSelect];
        var newPattern = Object.assign({},this.state);
        newPattern.recommendShirtUrl = newShirt.url;
        newPattern.recommendShirtId = newShirt._id;
        newPattern.previewUrl = e.target.value; 
        newPattern.colorCode = this.props.shirtData.currentColor;
        newPattern.designerId = this.props.userData.designer._id;
        // this.props.uploadPattern(newPattern); 
    }
  
  
    changeShirtType(index){
      this.props.changeShirt(index);  
    }
    changeColorCode(colorCode){ 

      this.props.changeColor(colorCode); 
    }
    shirtItem(shirt, index){
      
        let shirtItem = {
          height:  '100%',
          width: '100%'
        }
        let shirtFrame  = {
          marginTop : '20%'
        }

        return (
         
             <div key= {index} id={index === this.props.shirtData.currentSelect?"recommendShirt":""} className="col-sm-5" style = {shirtFrame}
             onClick={() => this.changeShirtType(index)} >
               <img className="shirtTypes" style={shirtItem} src={hostServer +'/'+ shirt.url}/>
              {shirt.detail}
             </div>
          )
    }
    listTypeShirt(){
        let listShirt = {
          margin: 0,
          padding: 0
        }
        return (
        
            
          <div className="row"  style = {listShirt}>
                  {this.props.shirtData.listShirt.map(this.shirtItem)}
          </div>
        )
    }
     colorItem(color){
        let background = {
              backgroundColor: color
          }
         return (
             <li key={color} id={color}  onClick={() => this.changeColorCode(color)}
             className="color-preview" title="sample" style={background}></li>
          )
      }

    customBar(){
      var listColor = [];
      if (this.props.shirtData.listShirt.length> 0) {
        listColor = this.props.shirtData.listShirt[this.props.shirtData.currentSelect].colorCode
      }
        return (
          <div className="form well">

            <div className="well">
                {listColor.length > 0 ?
             
                 listColor.map(this.colorItem): 'no shirt in server'}
            </div>

                {this.props.shirtData.listShirt.length > 0?
                this.listTypeShirt(): 'no shirt in server'} 

        </div>
        )
    }
    waitingProgress(){
      return(
            <Dialog
              title="waiting" 
              modal={false}
              open={this.props.shirtData.listShirt.length <= 0 }
              > 
              <CircularProgress size={80} thickness={5} />
              <CircularProgress size={80} thickness={5} />
            </Dialog>  
        )
    } 
    resetMessage(){
    	this.setState({
    		message: ''
    	})
    }
    noticeDialog(message){ 
      return(
        <DialogMessage message={message} 
            closeMessage ={this.resetMessage}  
            pattern = {this.props.pattern}/>
      )
    }
       

    render() {
        return (
            <div className="container">
            
                <div className="col-sm-3">
                  Logo 
                  <img id={this.state.imgPaternTagId} className="img-polaroid img-responsive"
               		style={{marginBottom:20}}  src={hostServer + '/' + this.props.pattern.url} />
                </div>
 
                <Paper className="col-sm-5" style={{height:'80vh'}}> 
                          <CanvasEditor />  
                </Paper>
                <div className="col-sm-3">
         
                    <Paper style={{height:'80vh'}}>
                          {this.customBar()}
                         <RaisedButton onClick={this.takePreviewBeforSubmit} label="Add to cart" primary={true}/>
                    </Paper>
                </div>
                        
                
                {this.props.shirtData.listShirt.length <= 0 ?this.waitingProgress():null} 
                {this.state.message !== '' ?this.noticeDialog(this.state.message):null}
                  <input type="hidden" id="patternTop"
                  onClick = {(e) => this.handleChangeRecommend('x', e)} />
                  <input type="hidden" id="patternLeft"
                  onClick = {(e) => this.handleChangeRecommend('y', e)} />
                    <input type="hidden" id="patternScale"
                  onClick = {(e) => this.handleChangeRecommend('scale', e)} />
                  <input type="hidden" id="patternAngle"
                  onClick = {(e) => this.handleChangeRecommend('rotate', e)} />
                  <input type="hidden" id="screenShotUrl"
                  onClick = {(e) => this.addToCart} />
                  
            </div>
        );
    }
}
export default CustomShirt;