import React from 'react';
import ReactDOM from 'react-dom';
import UploadImg from './UploadImg';

import * as UploadAct from './../actions/ActionUpLoadShirt.jsx';



class UpLoadShirt extends React.Component{

  constructor(props){
    super(props);
    this.state = {
       info: {
          detail: '',
          price: '',
          colorCode: ''
       }
    };
    this.getValueUploadShirt = this.getValueUploadShirt.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getValueUploadShirt() {
      var shirtInfo = this.state.info;
      console.log(shirtInfo);
//        this.setState({open: false, openSignUp: false});

  }

  handleChange(att, e) {
      var newInfo = this.state.info;
      newInfo[att] = e.target.value;
      this.setState({info: newInfo});
  }

    render(){

      return (
        <div>
            <UploadImg />

             <form>
              Detail: <br/>
              <textarea rows="10" cols="30" value=""
              onChange={(e) => this.handleChange('detail', e)}
              >
              </textarea>
              <br/>
              Price:
              <input type = "text" name = "price" required value=""
              onChange={(e) => this.handleChange('price', e)}
              />
              <br/>
              Color: <input className="jscolor" value="ab2567"
              onChange={(e) => this.handleChange('colorCode', e)}
              />
              <br/>
              <input type="radio" name="sex" value="Male" />  Male
              <br/>
              <input type="radio" name="sex" value="Female" /> Female
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
