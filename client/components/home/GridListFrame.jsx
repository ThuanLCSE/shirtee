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
    overflow: 'auto',
    width: '100%'
  },
  titleStyle: {
    color: 'rgb(255, 255, 255)',
  },
};

var patterns = [];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
class  GridListFrame extends React.Component{
  constructor(props){
    super(props);
  };
    
  componentWillMount() {
      this.props.getPattern();
  }

  render(){
    patterns = this.props.patternList.listPattern.slice(0, 4);
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={4} padding={10} cellHeight='auto'>
          {patterns.map( (row, index) => (
            <GridTile
              key={index}
              title={row.name}
              actionIcon={<IconButton><StarBorder color="yellow" /></IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
            <ProductImg url={row.url}/>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
};

export default GridListFrame;
