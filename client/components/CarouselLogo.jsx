import React from 'react';
import {Carousel} from 'react-bootstrap';
//import ImagePaper from './ImagePaper';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';



const style = {

  height: 200,
  width: 150,
  margin: 20,
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

class CarouselLogo extends React.Component{

  render() {
    return (
      <div className ="container">
        <div className="row">

          <GridList style={gridStyles.gridList} cellHeight={'auto'}

          >
            <Paper style={style} zDepth={3}>
            </Paper>

            <Paper style={style} zDepth={3}>
            </Paper>

            <Paper style={style} zDepth={3}>
            </Paper>

            <Paper style={style} zDepth={3}>
            </Paper>

            <Paper style={style} zDepth={3}>
            </Paper>

          </GridList>

        </div>
      </div>
    );
  }
};


export default CarouselLogo;
