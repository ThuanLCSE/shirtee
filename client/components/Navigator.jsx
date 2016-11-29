import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import {List, ListItem} from 'material-ui/List';

import ContentGesture from 'material-ui/svg-icons/content/gesture';
import PlacesPool from 'material-ui/svg-icons/places/pool';
import PlacesAcUnit from 'material-ui/svg-icons/places/ac-unit';
import ImageAudiotrack from 'material-ui/svg-icons/image/audiotrack';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

const flexContainer = {
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
    };
const stylePaper = {
    height: 90,
    paddingBottom: 10
}
const logo = {
    backgroundImage: "url(https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150)",
    backgroundSize: "contain",
    backgroundRepeat: 'no-repeat',
    height: '100%'
}

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleMouseOver(event) {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
          open: true,
          anchorEl: event.currentTarget,
        });
    };

    handleRequestClose() {
        this.setState({
          open: false,
        });
    };

    render() {
        return (
            <Paper style={stylePaper} zDepth={1}>
                <div className="col-md-2" style={logo}>
                </div>
                <div className="col-md-7">
                    <List style={flexContainer}>
                      <ListItem primaryText="Best Sell " leftIcon={<ContentGesture />} />
                      <ListItem primaryText="Newest" leftIcon={<ImageAudiotrack />} />
                      <ListItem primaryText="Promotion" leftIcon={<PlacesAcUnit />} />
                    
                    </List>
                </div>
                <div className="col-md-3">
                    <List style={flexContainer}>
                      <ListItem primaryText="Cart" leftIcon={<ActionShoppingCart />} />
                      <ListItem primaryText="Sign in"
                          onMouseEnter={this.handleMouseOver}/>
                      <Popover
                          open={this.state.open}
                          anchorEl={this.state.anchorEl}
                          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                          targetOrigin={{horizontal: 'left', vertical: 'top'}}
                          onRequestClose={this.handleRequestClose}>
                          <Menu>
                            <MenuItem primaryText="Information" />
                            <MenuItem primaryText="Manage account" />
                            <MenuItem primaryText="History orders" />
                            <MenuItem primaryText="Create new design" />
                            <MenuItem primaryText="View my design" />
                            <MenuItem primaryText="Log out" />
                          </Menu>
                      </Popover>
                    </List>
                </div>
            </Paper>
        );
    }
}

export default Navigator;
