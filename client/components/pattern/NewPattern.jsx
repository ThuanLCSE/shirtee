import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import UpPatternModal from './upPatternModal.jsx';
import PatternInfor from './PatternInfor';

class NewShirt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPaternTagId : 'patternTagId',
            category: [],
            expirationDate: 5,
            detail: {
                name: '',
                price: 0
            },
            url: '',
            position: {
              x:200,
              scale: 0.2,
              rotate: 0,
              y:150
            },
            selectedShirt: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleExpiration = this.handleExpiration.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.listTypeShirt = this.listTypeShirt.bind(this);
        this.shirtItem = this.shirtItem.bind(this);

         this.customBar = this.customBar.bind(this);
         this.changeShirtType = this.changeShirtType.bind(this);
         this.callAddPatternToShirt = this.callAddPatternToShirt.bind(this);
         this.handleChangePosition = this.handleChangePosition.bind(this);


    }

    componentWillMount(){
      this.props.getListShirt();
    }
    callAddPatternToShirt(top, left, scale){
      var patternId = this.state.imgPaternTagId;
      setTimeout(function(){
            var addPatternToShirt = document.getElementById('addPatternToShirt');
            addPatternToShirt.click(patternId, top, left, scale);
         }, 1500);
    }

    callApplyShirtCanvas(){
      setTimeout(function(){
          var applyShirtCanvas = document.getElementById('applyShirtCanvas');
          applyShirtCanvas.click();
      }, 1500);

    }
    callApplyColorChange(){
      setTimeout(function(){
          var applyColorChange = document.getElementById('applyColorChange');
          applyColorChange.click();
      }, 1500);

    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.url){
        this.callAddPatternToShirt(this.state.position.x,this.state.position.y,this.state.position.scale);
      }
       if (this.props.shirtData.listShirt.length > 0 ){
        this.callApplyShirtCanvas();
        this.callApplyColorChange();

      }

   }

    handleChangePosition(att, e) {
        var newPosition = this.state.position;
        newPosition[att] = e.target.value;
        this.setState({
          position: newPosition
        });
    }
    handleChangeUrl(url) {
        this.setState({url: url});
    }

    handleSubmit() {
      // console.log(this.state.position);
        var newShirt = this.props.shirtData.listShirt[this.state.selectedShirt];
        var newPattern = Object.assign({},this.state);
        newPattern.recommendShirtUrl = newShirt.url;
        newPattern.recommendShirtId = newShirt._id;
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

    handleExpiration(e, value) {
        this.setState({expirationDate: value > 10 ? 10 : value});
    };
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

        return(
              <div id="shirtDiv" className="page" style={shirtDiv}>
                <img id="tshirtFacing" src="static/TeeShirt1.png" style={shirtFacing}></img>
                <div id="drawingArea" style={drawingAreae}>
                  <canvas id="shirtCanvas"className="hover" style={webKitUser}>
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
      var newShirt = this.props.shirtData.listShirt[index];
      this.setState({
        selectedShirt: index
      });
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
             <div key= {shirt._id} className="col-sm-5" style = {shirtFrame}
             onClick={() => this.changeShirtType(index)} >
               <img className="shirtTypes" style={shirtItem} src={shirt.url}/>
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
             <li key={color} className="color-preview" title="sample" style={background}></li>
          )
      }

    customBar(){
      var listColor = [];
      if (this.props.shirtData.listShirt.length> 0) {
        listColor = this.props.shirtData.listShirt[this.state.selectedShirt].colorCode
      }
        return (
          <div className="form well">

            <div className="well">
                {listColor.length > 0 ?
                 listColor.map(this.colorItem): 'no shirt in server'}
            </div>

                {this.props.shirtData.listShirt?
                this.listTypeShirt(): 'no shirt in server'}



              <RaisedButton  label="Create Pattern" primary={true} style={{marginTop: '5vh' }}/>


        </div>
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
                                  handleExpiration={this.handleExpiration}
                                  stateList={this.state}
                                  changeUrl={this.handleChangeUrl}
                                  imgTagId = {this.state.imgPaternTagId}
                                  url={this.state.url}
                                  submit={this.handleSubmit}/>
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
                <UpPatternModal patternUrlChange={this.handleChangeUrl} />
                  <input type="hidden" id="patternTop"
                  onClick = {(e) => this.handleChangePosition('x', e)} />
                  <input type="hidden" id="patternLeft"
                  onClick = {(e) => this.handleChangePosition('y', e)} />
                    <input type="hidden" id="patternScale"
                  onClick = {(e) => this.handleChangePosition('scale', e)} />
                  <input type="hidden" id="patternAngle"
                  onClick = {(e) => this.handleChangePosition('rotate', e)} />
            </div>
        );
    }
}
export default NewShirt;
