import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';




const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 200,
    overflowX: 'auto',
  },


};
const imageStyles = {

};

const tilesData = [
  {
    img: 'http://placehold.it/200x200',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://placehold.it/200x200',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://placehold.it/200x200',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://placehold.it/200x200',
    title: 'Morning',
    author: 'fancycrave1',
  },

];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */


class GridListFour extends React.Component{



   render () {
      return (
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={4}>
            {tilesData.map((tile) => (
              <GridTile
                zDepth={5}
                title={tile.title}
                actionIcon={<IconButton><StarBorder color="yellow" /></IconButton>}
                titleStyle={styles.titleStyle}
                titlePosition="bottom"
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
              </GridTile>
            ))}
          </GridList>
        </div>
      );
   }

};

export default GridListFour;
