import React from 'react';
import ReactDOM from 'react-dom';
import UploadDemo from './UploadImg';



class UpLoadShirt extends React.Component{
    render(){
      constructor(props){
        super(props);
        this.state = {
           info:  {
              price: '',
              colorCode: ''
           }
        };
      }
      return (
        <div>
          <UploadImg />
          <UploadImg />
         <form>
          Detail: <br/>
          <textarea rows="10" cols="30">
            Write details here
          </textarea>
          <br/>
          Price:
          <input type = "text" name = "price" />
          <br/>
          Color: <input className="jscolor" value="ab2567" />
          <br/>
          <input type="radio" name="sex" value="Male" />  Male
          <br/>
          <input type="radio" name="sex" value="Female" /> Female
          <br/>

          <input type="submit" value="Create" />
          </form>
          </div>

      );
    }
};
export default UpLoadShirt;
