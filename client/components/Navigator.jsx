import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import {List, ListItem} from 'material-ui/List';
import SignIn from './SignIn';
import BecomeDesigner from './BecomeDesigner';

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
    paddingBottom: 10,
    marginBottom: 10
}
const logo = {
    backgroundImage: "url(https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150)",
    backgroundSize: "contain",
    backgroundRepeat: 'no-repeat',
    height: '100%'
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          openDialog: false
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleBecomeDesigner = this.handleBecomeDesigner.bind(this);
    }

    handleBecomeDesigner() {
        this.handleRequestClose();
        this.setState({openDialog: !this.state.openDialog});
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
            <List>
              <ListItem primaryText="Profile"
                  onClick={this.handleMouseOver}/>
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
                    <MenuItem onClick={this.handleBecomeDesigner} primaryText="Become designer" />
                    
                    <MenuItem primaryText="Create new design" />
                    <MenuItem primaryText="View my design" />
                    <MenuItem primaryText="Log out" />
                  </Menu>
              </Popover>
              <BecomeDesigner openDialog = {this.state.openDialog}
                              closeDialog = {this.handleBecomeDesigner}
                              becomeNewDesigner={this.props.becomeNewDesigner}
                              designerData={this.props.designerData}/>
            </List>
        );
    }
}

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          signInStatus: true
        };
    }

    render() {
        return (
            <Paper style={stylePaper} zDepth={1}>
                <div className="col-sm-2" style={logo}>
                </div>
                <div className="col-sm-7">
                    <List style={flexContainer}>
                      <ListItem primaryText={(<b>Best Sell</b>)} leftIcon={<ContentGesture />} />
                      <ListItem primaryText={(<b>Newest</b>)} leftIcon={<ImageAudiotrack />} />
                      <ListItem primaryText={(<b>Promotion</b>)} leftIcon={<PlacesAcUnit />} />

                    </List>
                </div>
                <div className="col-sm-3">
                    <div className="col-sm-6">
                        <List style={flexContainer}>
                          <ListItem primaryText={(<b>Cart</b>)} leftIcon={<ActionShoppingCart />} />
                        </List>
                    </div>
                    <div className="col-sm-6">
                        {!this.state.signInStatus ? <SignIn signInFunc={this.props.signInFunc}
                                                            userData={this.props.userData}
                                                            signUpFunc={this.props.signUpFunc}/> :
                                                    <Profile becomeNewDesigner={this.props.becomeNewDesigner}/>}
                    </div>
                </div>
            </Paper>
        );
    }
}

export default Navigator;