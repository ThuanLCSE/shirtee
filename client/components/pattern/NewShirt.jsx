import React from 'react';
import Paper from 'material-ui/Paper';

import PatternInfor from './PatternInfor';

class NewShirt extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="container">
                <div className="col-sm-3">
                    <PatternInfor categoryList={this.props.categoryList}
                                  getCategory={this.props.getCategory}/>
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