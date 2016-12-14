import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Slider from 'material-ui/Slider';
import Upload from 'rc-upload';
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
        this.props.callDragDropInit();
        this.props.changeUrl(result.path); 
      }
      fileUploadRedux(){ 
        return(
            <div>
              {this.props.url ? <img className="img-polaroid img-responsive"
               style={{marginBottom:20}} src={this.props.url}/> : null}

              <Upload name="picture" onReady={this.onReadyUpload}
              action = {uploadFileUrl}
              onStart={this.onStartUpload}
              onError={this.onErrorUpload}
              onSuccess={this.onSuccessUpload}
              onProgress={this.onProgressUpload}
              beforeUpload={this.beforeUpload}>
                <RaisedButton style={{width: '100%'}} label="Upload image" primary={true}/>
              </Upload>
            </div>
        )
      }
    
    render() {
        return (
            <Paper style={{padding: 20}}>
                {this.fileUploadRedux()}
                <TextField  floatingLabelText="Name"
                            hintText="Name"
                            fullWidth={true}
                            onChange={(e) => this.props.handleChange('name', e)}/><br/>
                <TextField  type="number"
                            floatingLabelText="Price"
                            hintText="Price"
                            fullWidth={true}
                            onChange={(e) => this.props.handleChange('price', e)}/>
                <TextField  type="number"
                            floatingLabelText="Expiration date"
                            min={0}
                            max={10}
                            value={this.props.stateList.expirationDate}
                            fullWidth={true}
                            onChange={(e, value) => this.props.handleExpiration(e, value)}/><br/>
                <Slider
                  min={0}
                  max={10}
                  step={1}
                  value={this.props.stateList.expirationDate}
                  onChange={(e, value) => this.props.handleExpiration(e, value)}  />
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