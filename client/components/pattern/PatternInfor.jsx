import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Slider from 'material-ui/Slider';

class PatternInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            expirationDate: 5,
            detail: {
                name: '',
                price: 0
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleExpiration = this.handleExpiration.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
    }
    
    handleCategory(e, name) {
        var categoryCheck = this.state.category;
        categoryCheck[name] = categoryCheck[name] ? false : true;
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
    
    componentWillMount() {
        this.props.getCategory();
    }
    
    render() {
        console.log(this.state.category);
        return (
            <Paper style={{padding: 20}}>
               <div style={{position: 'relative', width:'70%', margin: 'auto'}}>
                <RaisedButton style={{width: '100%'}} type="file" label="Upload image" primary={true}/>
                <input type="file" style={{position: 'absolute', top: 0, left: 0, opacity: 0, width:'100%', height:'100%'}}/>
               </div>
                <TextField  floatingLabelText="Name"
                            hintText="Name"
                            fullWidth={true}
                            onChange={(e) => this.handleChange('name', e)}/><br/>
                <TextField  type="number"
                            floatingLabelText="Price"
                            hintText="Price"
                            fullWidth={true}
                            onChange={(e) => this.handleChange('price', e)}/>
                <TextField  type="number"
                            floatingLabelText="Expiration date"
                            min={0}
                            max={10}
                            value={this.state.expirationDate}
                            fullWidth={true}
                            onChange={(e, value) => this.handleExpiration(e, value)}/><br/>
                <Slider
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.expirationDate}
                  onChange={(e, value) => this.handleExpiration(e, value)}
                />
                {this.props.categoryList.listCategory.map( (row, index) => (
                  <Checkbox key={index}
                            label={<b>{row.name}</b>}
                            onCheck={(e, name) => this.handleCategory(e, row.name)}/>
                  ))}
            </Paper>
        );
    }
}

export default PatternInfor;