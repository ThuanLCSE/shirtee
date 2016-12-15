import React from 'react';
import ReactDOM from 'react-dom';
import GridListFrame from './GridListFrame';

class PatternView extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
      this.props.getPattern();
  }
    
  render(){
    var a = [0, 1, 2, 3];
    return (
        <div className="container">
            {a.map( (row, index) => (
                <z>
                <GridListFrame  patternList={this.props.patternList}
                                votePattern={this.props.votePattern}
                                index={a[index]}
                                key={index}/>
                <br/><br/>
                </z>
            ))}
        </div>
    );
  }
};

export default PatternView;