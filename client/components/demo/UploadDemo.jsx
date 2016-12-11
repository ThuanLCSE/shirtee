import React from 'react';
import Upload from 'rc-upload';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uploadFileUrl from './../../constant/ApiUri';

class UploadDemo extends React.Component{
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
        console.log('beforeUpload');
        console.log(file);
  };
  onStartUpload(file){
    console.log('on start');
    console.log(file);
  }
  onErrorUpload(err,response){
    console.log('on error');
    console.log(response);
    console.log(err);
  }
  onSuccessUpload(result, file){
    console.log('on success');
    this.setState({previewUrl: result.path});

    console.log(result);
    console.log(file);
  }
  fileUploadRedux(){
    return(
        <div>
          {this.state.previewUrl?<img src={this.state.previewUrl}/>:null}

          <Upload name="picture" onReady={this.onReadyUpload}
          action = {uploadFileUrl}
          onStart={this.onStartUpload}
          onError={this.onErrorUpload}
          onSuccess={this.onSuccessUpload}
          onProgress={this.onProgressUpload}
          beforeUpload={this.beforeUpload}>
            <button>okoko</button>
          </Upload>
        </div>
    )
  }
  classicForm(){
    return(
      <form encType   =  "multipart/form-data"
               action    =  "/upload"
               method    =  "post"
          >
          <input type="file" name="picture" />
          <input type="submit" value="Upload Image" name="submit"/>
          </form>
      );
  }

  render(){
    return(
      <div>
          {this.fileUploadRedux()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // UserTodo: state.UserTodo
});

const mapDispatchToProps = dispatch => ({
    // UserAct: bindActionCreators(UserAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadDemo);
