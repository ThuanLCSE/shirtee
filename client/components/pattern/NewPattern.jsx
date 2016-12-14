import React from 'react';
import Paper from 'material-ui/Paper';

import PatternInfor from './PatternInfor';

class NewShirt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            expirationDate: 5,
            detail: {
                name: '',
                price: 0
            },
            url: '',
            designerId: this.props.userData.designer._id,
            position: {x:0, y:0},
            size: 1,
            rotate: 0,
            recommendShirtUrl: '',
            recommendShirtId: '',
            patternImg : "static/invisibleman.jpg",
            selectedShirt: 0,
            colorCodeList : [
                {key: 1, value: '#ffffff'},
                {key: 19, value: '#616161'},
                {key: 16, value: '#f0f0f0'},
                {key: 15, value: '#5b5b5b'},
                {key: 13, value: '#aeba5e'},
                {key: 12, value: '#222222'}],
            shirtList: [
                {url: 'ok', key: 1}
            ]
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
        
        

    }
    componentWillMount(){ 
      this.props.getListShirt();
    }
    componentDidMount(){
      setTimeout(function(){
            var hiddenDiv = document.getElementById('hiddenDiv'); 
            hiddenDiv.click(100,200);
         }, 1200);
    }
    callDragDropInit(){  
        var hiddenDiv = document.getElementById('hiddenDiv'); 
        hiddenDiv.click(100,200);  
    }
       handleChangeUrl(url) {
        this.setState({url: url});
    }
    handleChangeUrl(url) {
        this.setState({url: url});
    }
    
    handleSubmit() {
//        var newCategory = this.state.categoryTotal;
//        for(var categoryId in this.state.category)
//           if (categoryId) newCategory.push(categoryId);
//        this.setState({categoryTotal: newCategory});
        var patternData = this.state;
        console.log(patternData);
        this.props.uploadPattern(patternData);
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
              <div id="shirtDiv" className="page" >
                <img id="tshirtFacing" src="static/TeeShirt1.png"></img>
                <div id="drawingArea" style={drawingAreae}>         
                  <canvas id="tcanvas" width="200" height="400" className="hover" style={webKitUser}>
                  
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
                    <button id="remove-selected" className="btn" title="Delete selected item">
                        <i>delete </i>
                    </button> 
              </div>     
          )
      }
    changeShirtType(index){ 
      this.setState({
        selectedShirt: index
      })
    }
    shirtItem(shirt, index){ 
        let shirtIcon = {
          height:  80,
          width: 80
        }
        return (
             <div key= {shirt._id}
             onClick={() => this.changeShirtType(index)} style={shirtIcon}>
               <img className="img-responsive shirtTypes" src={shirt.url}/>
              {shirt.detail}
             </div>
          )
    }
    listTypeShirt(){
        return (
          <div className="form-group form-inline"> 
         
           
               <div className="row"> 
                      {this.props.shirtData.listShirt.map(this.shirtItem)}   
               </div>             
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
      console.log(this.props.shirtData.listShirt[this.state.selectedShirt].colorCode);
      if (this.props.shirtData.listShirt.length> 0) {
        listColor = this.props.shirtData.listShirt[this.state.selectedShirt].colorCode
      }
        return (
          <div className="form"> 
                {listColor.length > 0 ? 
                listColor.map(this.colorItem): 'no shirt in server'}   
                 {this.props.shirtData.listShirt?
                this.listTypeShirt(): 'no shirt in server'}       
               <button className="btn btn-success">Create Pattern</button> 
        </div>  
        )
    }   
    
    render() { 
        return (
            <div className="container">
                <div className="col-sm-3">
                    <PatternInfor callDragDropInit = {this.callDragDropInit}
                                    categoryList={this.props.categoryList}
                                  getCategory={this.props.getCategory}
                                  handleCategory={this.handleCategory}
                                  handleChange={this.handleChange}
                                  handleExpiration={this.handleExpiration}
                                  stateList={this.state}
                                  changeUrl={this.handleChangeUrl}
                                  url={this.state.url}
                                  submit={this.handleSubmit}/>
                </div>
                <div className="col-sm-6">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <Paper style={{height:500}}>
                           {this.imageEditor()}
                           {this.editor()}
                            <input type="text" id="patternTop" value=""/>
                            <input type="text" id="patternLeft" value=""/>
                        </Paper>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="col-sm-3">
                    <Paper style={{height:500}}>
                         {this.customBar()}
                    </Paper>
                </div>
            </div>
        );
    }
}

export default NewShirt;