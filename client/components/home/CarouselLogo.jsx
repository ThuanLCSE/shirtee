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



// <Carousel slide={true} wrap={true}  pauseOnHover={true}>
//       <Carousel.Item>
//         <ImagePaper />
//       </Carousel.Item>
//       <Carousel.Item>
//           <ImagePaper />
//       </Carousel.Item>
//       <Carousel.Item>
//           <ImagePaper />
//       </Carousel.Item>
// </Carousel>


// <Paper style={style} zDepth={3}>
// </Paper>
//
// <Paper style={style} zDepth={3}>
// </Paper>
//
// <Paper style={style} zDepth={3}>
// </Paper>
//
// <Paper style={style} zDepth={3}>
// </Paper>
//
// <Paper style={style} zDepth={3}>
// </Paper>

// onClick={() => this.changeShirtType(index)}


class CarouselLogo extends React.Component{

  shirtItem(shirt, index){

      return (
          <div className = "col-sm-3">


             <img className = "img-responsive" src={shirt.url}   key= {shirt._id} />
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
