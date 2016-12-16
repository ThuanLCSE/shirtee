import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox'; 
import Upload from 'rc-upload';
import {hostServer} from './../../constant/ApiUri';
import {uploadFileUrl} from './../../constant/ApiUri';

class PatternInfor extends React.Component {
    constructor(props) {
        super(props);
        this.onSuccessUpload = this.onSuccessUpload.bind(this);
        this.fileUploadRedux = this.fileUploadRedux.bind(this);
    }
    
    componentWillMount() {
        this.props.getCategory();
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
        this.props.changeUrl(result.path); 
      }
      fileUploadRedux(){ 
        return(
            <div>
              {this.props.url ? <img id={this.props.imgTagId} className="img-polaroid img-responsive"
               style={{marginBottom:20}} src={hostServer +'/'+ this.props.url}/> : null}

              <Upload name="picture" onReady={this.onReadyUpload}
              action = {uploadFileUrl}
              onStart={this.onStartUpload}
              onError={this.onErrorUpload}
              onSuccess={this.onSuccessUpload}
              onProgress={this.onProgressUpload}
              beforeUpload={this.beforeUpload}>
                <RaisedButton style={{width: '100%'}} label="Change picture" primary={true}/>
              </Upload>
            </div>
        )
      }
    
    render() {
      var today = new Date();
      var expireDay = today.setDate(today.getDate() + this.props.expireTime);
        return (
            <Paper style={{padding: 20}}>
                {this.fileUploadRedux()}
                Logo will expire in {(new Date(expireDay)).toLocaleDateString()} 
                <TextField  floatingLabelText="Name"
                            hintText="Name"
                            value={this.props.detail.name}
                            fullWidth={true}
                            onChange={(e) => this.props.handleChange('name', e)}/><br/>
                <TextField  type="number"
                            floatingLabelText="Price"
                            value={this.props.detail.price}
                            hintText="Price"
                            fullWidth={true}
                            onChange={(e) => this.props.handleChange('price', e)}/>
                
                {this.props.categoryList.listCategory.map( (row, index) => (
                  <Checkbox key={index}
                            label={<b>{row.name}</b>}
                            onCheck={(e, id) => this.props.handleCategory(e, row._id)}/>
                  ))}
                <RaisedButton label="Create new pattern" onClick={this.props.submit} primary={true}/>
            </Paper>
        );
    }
}

export default PatternInfor;