import React from 'react';
import Upload from 'rc-upload';  

import {uploadFileUrl} from './../../constant/ApiUri';



class UploadImg extends React.Component{
  constructor(props) {
        super(props);
        this.state= {
          previewUrl : ''
        }
        this.onSuccessUpload = this.onSuccessUpload.bind(this);
    }

  uploadFile() {
    var fd = new FormData();
    fd.append( "fileInput", $("#fileInput")[0].files[0]);

  }
  beforeUpload(file) { 
  };
  onStartUpload(file){
  
  }
  onErrorUpload(err,response){
    console.log('on error');
    console.log(response);
    console.log(err);
  }
  onSuccessUpload(result, file){
    this.props.getUrl(result.path); 
    this.setState({previewUrl: result.path}); 
  }
  //{this.state.previewUrl?<img src={this.state.previewUrl}/>:null}
  fileUploadRedux(){
    return(
        <div>
          {this.state.previewUrl}

          <Upload name="picture" onReady={this.onReadyUpload}
          action = {uploadFileUrl}
          onStart={this.onStartUpload}
          onError={this.onErrorUpload}
          onSuccess={this.onSuccessUpload}
          onProgress={this.onProgressUpload}
          beforeUpload={this.beforeUpload}>
            <button>{this.props.buttonName}</button>
          </Upload>
        </div>
    )
  } 
  render(){
    return(
      <div>
          {this.fileUploadRedux()}
      </div>
    );
  }
} 

export default  UploadImg;
