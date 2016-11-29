import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ProductImg from './ProductImg.jsx';
//import {zIndex} from 'material-ui/lib/styles/zIndex';

const styles = {
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

const tilesData = [
  {

    title: 'Logo1',
    author: 'Tien Dat',
  },
  {

    title: 'Logo2',
    author: 'Hung',
  },
  {

    title: 'Logo3',
    author: 'Thuan',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
class  GridListFrame extends React.Component{
  constructor(props){
    super(props);
  };


  render(){
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={3} cellHeight={'auto'} padding={10}>
          {tilesData.map((tile) => (
            <GridTile
              cellHeight={'auto'}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="yellow" /></IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
            <ProductImg />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
};

export default GridListFrame;
