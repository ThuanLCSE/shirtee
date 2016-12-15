import React from 'react';
import ReactDOM from 'react-dom';
import GridListFrame from './GridListFrame';

class Homepage extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
      this.props.getPattern.GetList();
      this.props.getPattern.GetListBestSell();
      this.props.getPattern.GetListNewest();
  }
    
  render(){
    return (
        <div className="container">
          <img src='static/banner.jpg' style={{width:'100%', marginBottom:25}}/>
          <GridListFrame patternList={this.props.patternList.listPattern}
                         votePattern={this.props.votePattern}
                         index={0}/>
          <br/>
          <div className="title-line">
            <h4>Best Sell</h4>
          </div>
          <br/>
          <GridListFrame patternList={this.props.patternList.listPatternBestSell}
                         votePattern={this.props.votePattern}
                         index={0}/>
          <br/><br/>
          <GridListFrame patternList={this.props.patternList.listPatternBestSell}
                         votePattern={this.props.votePattern}
                         index={1}/>
          <br/>
          <div className="title-line">
            <h4>Newest</h4>
          </div>
          <br/>
          <GridListFrame patternList={this.props.patternList.listPatternNewest}
                         votePattern={this.props.votePattern}
                         index={0}/>
          <br/><br/>
          <GridListFrame patternList={this.props.patternList.listPatternNewest}
                         votePattern={this.props.votePattern}
                         index={1}/>
        </div>
    );
  }
};

export default Homepage;