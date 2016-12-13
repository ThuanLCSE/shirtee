import React from 'react'; 
import UploadImg from './UploadImg';
import Checkbox from 'material-ui/Checkbox';


import * as UploadAct from './../../actions/ActionUploadShirt.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class UpLoadShirt extends React.Component{

  constructor(props){
    super(props);
    this.state = {
       info: {
         gender : '',
         url: '',
         detail: '',
         layoutUrl: '',
         price: '',
         colorCode: []
       },
       listColorDefault : [
          {key: 1, value: '#ffffff', name: 'red'},
          {key: 19, value: '#616161', name: 'vang'},
          {key: 16, value: '#f0f0f0', name: 'hogn'},
          {key: 15, value: '#5b5b5b', name: 'xanh cu chuoi'},
          {key: 13, value: '#aeba5e', name: 'tim moc meo'},
          {key: 12, value: '#222222', name: 'nau ruc ro'}
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
      this.props.UploadAct.UpLoadShirt(shirtInfo); 

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
    let background = {
      backgroundColor: color.value
    }

     return ( 
                  <Checkbox key = {color.key}
                            label={<b style={background}>{color.name}</b>}
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
      return (
        <div>
            <UploadImg buttonName="shirt Url" getUrl = {this.onUrlChange}/>
            {this.state.info.url?<img style= {shirtPreview} src={this.state.info.url}/>:null}
            <UploadImg buttonName="shirt layout url" getUrl = {this.onLayoutUrlChange}/>
            {this.state.info.layoutUrl?<img style= {shirtPreview} src={this.state.info.layoutUrl}/>:null}

             <form>
              Detail: <br/>
              <textarea rows="10" cols="30"
              onChange={(e) => this.handleChange('detail', e)}
              >
              </textarea>
              <br/>
              Price:
              <input type = "text" name = "price"
              onChange={(e) => this.handleChange('price', e)}
              />
              <br/>
              Color: {this.colorCheckList()}

              <input type="radio" name="sex" value='Male'
              checked={this.state.info.gender === 'Male'}
              onChange={this.onGenderChanged} /> Male
              <br/>

              <input type="radio" name="sex" value='Female'
              checked={this.state.info.gender === 'Female'}
              onChange={this.onGenderChanged} /> Female
              <br/>

              <button onClick={this.getValueUploadShirt}>
              Create
              </button>
              </form>
          </div>
      );
    }
};

const mapStateToProps = state => ({
  UserTodo : state.UserTodo
});

const mapDispatchToProps = dispatch => ({
  UploadAct : bindActionCreators(UploadAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpLoadShirt);
