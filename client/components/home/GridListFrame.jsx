import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import {List, ListItem} from 'material-ui/List';
import Popover from 'material-ui/Popover';

import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import ProductImg from './ProductImg.jsx';

const flexContainer = {
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
    };

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    width: '100%'
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
    this.state = {
      openVote: false
    };
    this.handleClickVote = this.handleClickVote.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  };

  handleRequestClose() {
    this.setState({
      openVote: false
    });
  };

  handleClickVote(event) {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      openVote: true,
      anchorEl: event.currentTarget,
    });
  };

  render(){
    var start = this.props.index * 4;
    var end = start + 4;
    patterns = this.props.patternList.slice(start, end);
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={4} padding={30} cellHeight='auto'>
          {patterns.map( (row, index) => (
            <z key={index}>
                <GridTile
                  title={<b>{'$' + row.price}</b>}
                  actionIcon={<IconButton onClick={this.handleClickVote}><StarBorder color="yellow" /></IconButton>}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                <ProductImg url={row.url}
                          openModal = {this.props.openModal}
                          shirtData = {this.props.shirtData}
                          listShirt = {this.props.listShirt}
                 />

                </GridTile>
                <Popover
                  open={this.state.openVote}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                  targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                  onRequestClose={this.handleRequestClose}>
                  <List style={flexContainer}>
                    <ListItem children={<StarBorder/>} onClick={() => this.props.votePattern(1, row._id)}/>
                    <ListItem children={<StarBorder/>} onClick={() => this.props.votePattern(2, row._id)}/>
                    <ListItem children={<StarBorder/>} onClick={() => this.props.votePattern(3, row._id)}/>
                    <ListItem children={<StarBorder/>} onClick={() => this.props.votePattern(4, row._id)}/>
                    <ListItem children={<StarBorder/>} onClick={() => this.props.votePattern(5, row._id)}/>
                  </List>
                </Popover>
            </z>
          ))}
        </GridList>
      </div>
    );
  }
};

export default GridListFrame;
