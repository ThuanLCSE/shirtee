
import React from 'react';
import UploadImg from './UploadImg';
import {hostServer} from './../../constant/ApiUri';

import Checkbox from 'material-ui/Checkbox';



class UpLoadShirt extends React.Component{

  constructor(props){
    super(props);
    this.state = {
       info: {
         gender : '',
         url: '',
         detail: '',
         layoutUrl: 'ahihi',
         price: '',
         colorCode: []
       },
       listColorDefault : [

          {key: 1, value: '#ffffff', name: '#ffffff'},
          {key: 19, value: '#0277BD', name: '#0277BD'},
          {key: 16, value: '#EC407A', name: '#EC407A'},
          {key: 15, value: '#9C27B0', name: '#9C27B0'},
          {key: 13, value: '#212121', name: '#212121'},
          {key: 232, value: '#FF5722', name: '#FF5722'},
          {key: 56, value: '#2ecc71', name: '#2ecc71'},
          {key: 12, value: '#e67e22', name: '#e67e22'},
          {key: 23, value: '#e74c3c', name: '#e74c3c'},
          {key: 34, value: '#c0392b', name: '#c0392b'},
          {key: 45, value: '#E08283', name: '#E08283'},
          {key: 343, value: '#9B59B6', name: '#9B59B6'},
          {key: 167, value: '#4183D7', name: '#4183D7'},
          {key: 78, value: '#87D37C', name: '#87D37C'},
          {key: 89, value: '#36D7B7', name: '#36D7B7'},
          {key: 90, value: '#26C281', name: '#26C281'}
       ]
    };
    this.getValueUploadShirt = this.getValueUploadShirt.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onGenderChanged = this.onGenderChanged.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.onLayoutUrlChange = this.onLayoutUrlChange.bind(this);

    this.handleCheckColorBox = this.handleCheckColorBox.bind(this);
    this.colorItem = this.colorItem.bind(this);

    this.colorCheckList = this.colorCheckList.bind(this);
  }
  getValueUploadShirt() {
      var shirtInfo = this.state.info;

      this.props.uploadShirt(shirtInfo);

  }

  handleChange(att, e) {
      var newInfo = this.state.info;
      newInfo[att] = e.target.value;
      this.setState({info: newInfo});

  }
  onGenderChanged(e) {
    var newInfo = this.state.info;
    newInfo.gender = e.currentTarget.value;
    this.setState({
         info : newInfo
      });
  }

  onUrlChange(imgUrl) {
    var newInfo = this.state.info;
    newInfo.url = imgUrl;
    this.setState({
       info : newInfo
    });
  }
  onLayoutUrlChange(imgUrl){
    var newInfo = this.state.info;
    newInfo.layoutUrl = imgUrl;
    this.setState({
      info: newInfo
    });

  }
  handleCheckColorBox(e,isChecked, code){

    var newInfo = this.state.info;
    if (isChecked && (newInfo.colorCode.indexOf(code) === -1)){
      newInfo.colorCode.push(code);
    } else if (!isChecked && (newInfo.colorCode.indexOf(code) > -1)){
      newInfo.colorCode.splice(newInfo.colorCode.indexOf(code), 1) ;
    }
    this.setState({
      info: newInfo
    });

  }
  colorItem(color){


    let checkboxStyle = {
      backgroundColor: color.value,
      width: '40px',
      display: 'inline-block',
      marginRight: '10px'
    }


     return (
                  <Checkbox key = {color.key}

                            style = {checkboxStyle}
                            onCheck={(e,isChecked, code) => this.handleCheckColorBox(e, isChecked,color.value)}/>
      )
  }
  colorCheckList(){
    return (
          <div>
              {this.state.listColorDefault.map(this.colorItem)}
          </div>
      )
  }
  render(){
    let shirtPreview = {
      width : 200,
      height: 200
    }

    // <UploadImg buttonName="shirt layout url" getUrl = {this.onLayoutUrlChange}/>
    // {this.state.info.layoutUrl?<img style= {shirtPreview} src={this.state.info.layoutUrl}/>:null}

      return (
        <div>
            <UploadImg buttonName="shirt Url" getUrl = {this.onUrlChange}/>
            {this.state.info.url?<img style= {shirtPreview} src={hostServer +'/' +this.state.info.url}/>:null}
              Detail: 
              <input type = "text"  name = "detail" value ={this.state.info.detail}
              onChange={(e) => this.handleChange('detail', e)}  />

              <br/>
              Price:
              <input type = "text" name = "price" value ={this.state.info.price}
              onChange={(e) => this.handleChange('price', e)} />
              <br/>
              Color: {this.colorCheckList()}

              <input type="radio" name="sex" value='Male'
              checked={this.state.info.gender === 'Male'}
              onChange={this.onGenderChanged} /> Male

              <input type="radio" name="sex" value='Female'
              checked={this.state.info.gender === 'Female'}
              onChange={this.onGenderChanged} /> Female
              <br/>

              <button onClick={this.getValueUploadShirt}>
              Create

              </button>
              <p>{this.props.uploadMessage}</p>
          </div>
      );
    }
};



export default UpLoadShirt;
