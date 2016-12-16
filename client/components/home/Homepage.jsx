import React from 'react'; 
import GridListFrame from './GridListFrame';
import ProductImg from './ProductImg';
import CarouselLogo from './../home/CarouselLogo';
import Dialog from 'material-ui/Dialog';


const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

class Homepage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        open: false,
    }


  this.handleOpen = this.handleOpen.bind(this);
  this.handleClose = this.handleClose.bind(this);


  }
  handleOpen(pattern) {
    this.props.choosePattern(pattern);
    this.setState({open: true});
  }
  handleClose() {
    this.setState({open: false});
  }

  componentWillMount() {
      this.props.getPattern.GetList();
      this.props.getPattern.GetListBestSell();
      this.props.getPattern.GetListNewest();
      this.props.shirtAct.GetList();

  }


  showShirtModal(){
    return(
      <Dialog
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
        contentStyle={customContentStyle}
      >
      <CarouselLogo  
        changeView = {this.props.changeView}
        chooseShirt = {this.props.shirtAct.selectCurrentShirt}
        shirtData = {this.props.shirtData}/>
      </Dialog>
    )
  }

  render(){
    return (
        <div className="container">
          <img src='static/banner.jpg' style={{width:'100%', marginBottom:25}}/>
          <GridListFrame patternList={this.props.patternList.listPattern}
                         votePattern={this.props.votePattern}
                         openModal = {this.handleOpen}
                         index={0}/>
          <br/>
          <div className="title-line">
            <h4>Best Sell</h4>
          </div>
          <br/>
          <GridListFrame patternList={this.props.patternList.listPatternBestSell}
                         votePattern={this.props.votePattern}
                            openModal = {this.handleOpen}
                         index={0}/>
          <br/>
          <div className="title-line">
            <h4>Newest</h4>
          </div>
          <br/>
          <GridListFrame patternList={this.props.patternList.listPatternNewest}
                         votePattern={this.props.votePattern}
                            openModal = {this.handleOpen}
                         index={0}/>
          <br/>

          {this.showShirtModal()}
        </div>
    );
  }
};

export default Homepage;
