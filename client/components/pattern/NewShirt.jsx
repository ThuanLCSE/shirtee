import React from 'react';
import Paper from 'material-ui/Paper';

import PatternInfor from './PatternInfor';

class NewShirt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            expirationDate: 5,
            detail: {
                name: '',
                price: 0
            },
            url: '',
            designerId: this.props.userData.designer._id,
            categoryTotal: [],
            position: {x:0, y:0},
            size: 1,
            rotate: 0,
            recommendShirtUrl: '',
            recommendShirtId: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleExpiration = this.handleExpiration.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeUrl(url) {
        this.setState({url: url});
    }
    
    handleSubmit() {
        var newCategory = this.state.categoryTotal;
        for(var categoryId in this.state.category)
           if (categoryId) newCategory.push(categoryId);
        this.setState({categoryTotal: newCategory});
        var patternData = this.state;
        console.log(patternData);
        this.props.uploadPattern(patternData);
    }
    
    handleCategory(e, id) {
        var categoryCheck = this.state.category;
        categoryCheck[id] = categoryCheck[id] ? false : true;
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
    
    render() {
        return (
            <div className="container">
                <div className="col-sm-3">
                    <PatternInfor categoryList={this.props.categoryList}
                                  getCategory={this.props.getCategory}
                                  handleCategory={this.handleCategory}
                                  handleChange={this.handleChange}
                                  handleExpiration={this.handleExpiration}
                                  stateList={this.state}
                                  changeUrl={this.handleChangeUrl}
                                  url={this.state.url}
                                  submit={this.handleSubmit}/>
                </div>
                <div className="col-sm-6">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <Paper style={{height:500}}>

                        </Paper>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="col-sm-3">
                    <Paper style={{height:500}}>
                        
                    </Paper>
                </div>
            </div>
        );
    }
}

export default NewShirt;