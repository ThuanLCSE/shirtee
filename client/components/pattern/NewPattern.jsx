import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import hostServer from './../../constant/ApiUri';

import UpPatternModal from './upPatternModal.jsx';
import DialogMessage from './../utils/DialogMessage.jsx';
import PatternInfor from './PatternInfor';

class NewShirt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPaternTagId : 'patternTagId',
            category: [],
        
            detail: {
                name: '',
                price: 0
            },
            url: '',  
            recommend: { 
              x:200,
              scale: 0.2,
              rotate: 0,
              y:150
            },
           
            canvas: {
              height: 100,
              width: 100
            } 
        };
        this.handleChange = this.handleChange.bind(this); 
        this.handleCategory = this.handleCategory.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);
        this.submitAfterHavePreview = this.submitAfterHavePreview.bind(this);
        
        this.listTypeShirt = this.listTypeShirt.bind(this);
        this.shirtItem = this.shirtItem.bind(this);
           this.colorItem = this.colorItem.bind(this);

 
         this.customBar = this.customBar.bind(this);
         this.changeShirtType = this.changeShirtType.bind(this);
         this.changeColorCode = this.changeColorCode.bind(this);
        
         this.callAddPatternToShirt = this.callAddPatternToShirt.bind(this);
         this.handleChangeRecommend = this.handleChangeRecommend.bind(this);
         this.loadCanvasInit = this.loadCanvasInit.bind(this);


    }

    componentWillMount(){
      this.props.getLevelInfo(this.props.userData.designer._id);
      this.props.getListShirt();
    }
     componentDidMount() { 
      var mountedCanvas = this.state.canvas; 
      mountedCanvas.width = document.getElementById('tshirtFacing').clientWidth;
      mountedCanvas.height = mountedCanvas.width *63/53;
      this.setState({ canvas: mountedCanvas });
    }

    callAddPatternToShirt(top, left, scale){
      var patternId = this.state.imgPaternTagId;
      var addPatternToShirt = document.getElementById('addPatternToShirt').click(patternId, top, left, scale); 
    }

    callApplyShirtCanvas(){ 
      document.getElementById('applyShirtCanvas').click(); 
    }
    callApplyColorChange(){ 
     document.getElementById('applyColorChange').click(); 
    }
    componentDidUpdate(prevProps, prevState){
      if (prevState.url !== this.state.url){
          if (prevState.url === ''){
            this.callAddPatternToShirt(this.state.recommend.x,this.state.recommend.y,this.state.recommend.scale);
          } else {
            document.getElementById(this.state.imgPaternTagId).click();
          }
          
      }
       
      if (this.props.shirtData.listShirt.length > 0){
        this.callApplyShirtCanvas();
      } 
      if (prevProps.shirtData.currentSelect !== this.props.shirtData.currentSelect){
        this.callApplyColorChange();
      }
    }
    loadCanvasInit() {  
      return (
        <UpPatternModal patternUrlChange={this.handleChangeUrl} />
      )

   }

    handleChangeRecommend(att, e) {
        var newRecommend = this.state.recommend;
        newRecommend[att] = e.target.value;
        this.setState({
          recommend: newRecommend
        });
    }
    handleChangeUrl(url) {
        this.setState({url: url});
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
        this.props.uploadPattern(newPattern); 
    }

    handleCategory(e, id) {
        var categoryCheck = this.state.category;
        var i = categoryCheck.indexOf(id);
        if (i === -1) categoryCheck.push(id);
            else categoryCheck.splice(i, 1);
        this.setState({category: categoryCheck})
    }

    handleChange(att, e) {
        var newDetail = this.state.detail;
        newDetail[att] = e.target.value;
        this.setState({detail: newDetail});
    }

  
     editor(){

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
                <img src="static/platform.png" style={shirtFacing}></img>
                <div id="drawingArea" style={drawingAreae}>
                  <img id="tshirtFacing" className = "shirtLayout" src="static/TeeShirt1.png" style={platform}/>
                  <canvas id="shirtCanvas" height={this.state.canvas.height}
                  width={this.state.canvas.width}
                   className="hover" style={webKitUser}>
                  </canvas>
                </div>
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

              <div className="pull-right"  id="imageeditor">
                <RaisedButton  id="remove-selected" label="delete" primary={true}/>

              </div>
          )
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
         
             <div key= {index} className="col-sm-5" style = {shirtFrame}
             onClick={() => this.changeShirtType(index)} >
               <img className="shirtTypes" style={shirtItem} src={ hostServer +'/'+ shirt.url}/>
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
             <li key={color}  onClick={() => this.changeColorCode(color)}
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

                {this.props.shirtData.listShirt?
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
    noticeDialog(message){ 
      return(
        <DialogMessage message={message} 
            closeMessage ={this.props.closeMessage}  
            pattern = {this.props.designerData.pattern}/>
      )
    }
       

    render() {
        return (
            <div className="container">
            
                <div className="col-sm-3">
                 <PatternInfor
                                  categoryList={this.props.categoryList}
                                  getCategory={this.props.getCategory}
                                  handleCategory={this.handleCategory}
                                  handleChange={this.handleChange}
                                  detail = {this.state.detail} 
                                  stateList={this.state}
                                  expireTime = {this.props.designerData.level.expireTime}
                                  changeUrl={this.handleChangeUrl}
                                  imgTagId = {this.state.imgPaternTagId}
                                  url={this.state.url}
                                  submit={this.takePreviewBeforSubmit}/>
            
                </div>
 
                <Paper className="col-sm-5" style={{height:'80vh'}}> 
                          {this.editor()}
                          {this.imageEditor()}

                </Paper>
                <div className="col-sm-3">
         
                    <Paper style={{height:'80vh'}}>
                         {this.customBar()}
                    </Paper>
                </div>
                {this.props.shirtData.listShirt.length <= 0 ?this.waitingProgress():this.loadCanvasInit()} 
                {this.props.designerData.message !== '' ?this.noticeDialog(this.props.designerData.message):null}
                  <input type="hidden" id="patternTop"
                  onClick = {(e) => this.handleChangeRecommend('x', e)} />
                  <input type="hidden" id="patternLeft"
                  onClick = {(e) => this.handleChangeRecommend('y', e)} />
                    <input type="hidden" id="patternScale"
                  onClick = {(e) => this.handleChangeRecommend('scale', e)} />
                  <input type="hidden" id="patternAngle"
                  onClick = {(e) => this.handleChangeRecommend('rotate', e)} />
                  <input type="hidden" id="screenShotUrl"
                  onClick = {(e) => this.submitAfterHavePreview(e)} />
                  
            </div>
        );
    }
}
export default NewShirt;
