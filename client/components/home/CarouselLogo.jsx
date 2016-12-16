
import React from 'react';
import {Carousel} from 'react-bootstrap';
//import ImagePaper from './ImagePaper';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';



const style = {
  textAlign: 'center',
};

const gridStyles = {
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',

  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};




class CarouselLogo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       
    } 
   this.shirtChoose = this.shirtChoose.bind(this);
   this.shirtItem = this.shirtItem.bind(this);
  
  }
  shirtChoose(index){
    this.props.changeView('CustomShirt');
    this.props.chooseShirt(index);
  }
  shirtItem(shirt, index){
      let backgroundStyle = {
          backgroundImage : `url('${shirt.url.replace("\\", "/")}')`,
          width: '100%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          height: '200px'
      };
      return (
          <div key={shirt._id} className = "col-sm-3" onClick={() => this.shirtChoose(index)}>
             <div className = "img-responsive" src={shirt.url} style={backgroundStyle} ></div>
             {shirt.detail}
          </div>
        )
  }


  getListShirt() {
    return (


      <div className = "row">
          {this.props.shirtData.listShirt.map(this.shirtItem)}
      </div>

    );
  }

  render() {
    return (
      <div className ="container">
              {this.props.shirtData.listShirt?
              this.getListShirt(): 'no shirt in server'}

      </div>
    );
  }
};


export default CarouselLogo;
