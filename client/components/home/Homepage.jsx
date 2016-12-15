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
      this.props.listShirt.GetList();
  }

  render(){
    return (
        <div className="container">
          <img src='static/banner.png' style={{width:'100%', marginBottom:25}}/>
          <GridListFrame patternList={this.props.patternList.listPattern}
                         votePattern={this.props.votePattern}
                         index={0}
                         shirtData = {this.props.shirtData}
                         listShirt = {this.props.listShirt.GetList}

                         />
          <br/>
          <div className="title-line">
            <h4>Best Sell</h4>
          </div>
          <br/>
          <GridListFrame patternList={this.props.patternList.listPatternBestSell}
                         votePattern={this.props.votePattern}
                         index={0}
                         shirtData = {this.props.shirtData.listShirt}
                         getListShirt = {this.props.getListShirt}
                         />
          <br/><br/>
          <GridListFrame patternList={this.props.patternList.listPatternBestSell}
                         votePattern={this.props.votePattern}
                         index={1}
                         shirtData = {this.props.shirtData.listShirt}
                         getListShirt = {this.props.getListShirt}/>
          <br/>
          <div className="title-line">
            <h4>Newest</h4>
          </div>
          <br/>
          <GridListFrame patternList={this.props.patternList.listPatternNewest}
                         votePattern={this.props.votePattern}
                         index={0}
                         shirtData = {this.props.shirtData.listShirt}
                         getListShirt = {this.props.getListShirt}
                         />
          <br/><br/>
          <GridListFrame patternList={this.props.patternList.listPatternNewest}
                         votePattern={this.props.votePattern}
                         index={1}
                         shirtData = {this.props.shirtData.listShirt}
                         getListShirt = {this.props.getListShirt}
                         />
        </div>
    );
  }
};

export default Homepage;
