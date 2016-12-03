import React from 'react';
import ReactDOM from 'react-dom';
import UploadImg from './UploadImg';


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
         colorCode: ''
       }
    };
    this.getValueUploadShirt = this.getValueUploadShirt.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onGenderChanged = this.onGenderChanged.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.onLayoutUrlChange = this.onLayoutUrlChange.bind(this);

  }
  getValueUploadShirt() {
      var shirtInfo = this.state.info;
      this.props.UploadAct.UpLoadShirt(shirtInfo);
//        this.setState({open: false, openSignUp: false});

  }

  handleChange(att, e) {
      var newInfo = this.state.info;
      newInfo[att] = e.target.value;
      this.setState({info: newInfo});
  }

  //



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




  render(){

      return (
        <div>
            <UploadImg getUrl = {this.onUrlChange}/>
            <UploadImg getUrl = {this.onLayoutUrlChange}/>

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
              Color: <input className="jscolor"
              onChange={(e) => this.handleChange('colorCode', e)}
              />
              <br/>

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
