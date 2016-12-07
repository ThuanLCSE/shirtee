import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import {List, ListItem} from 'material-ui/List';
import SignIn from './SignIn';
import BecomeDesigner from './BecomeDesigner';

import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import AvFiberNew from 'material-ui/svg-icons/av/fiber-new';
import ActionCardGiftcard from 'material-ui/svg-icons/action/card-giftcard';
import ActionList from 'material-ui/svg-icons/action/list';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

const flexContainer = {
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
    };
const stylePaper = {
    overflow: 'auto',
    paddingBottom: 10,
    marginBottom: 10
}
const logo = {
    backgroundImage: "url(https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150)",
    backgroundSize: "contain",
    backgroundRepeat: 'no-repeat',
    overflow:'auto'
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          openDialog: false
        };
        this.handleClickProfile = this.handleClickProfile.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleBecomeDesigner = this.handleBecomeDesigner.bind(this);
        this.handleChoosePopover = this.handleChoosePopover.bind(this);
    }
    
    handleChoosePopover(e, view) {
        this.props.changeView(view);
        this.setState({open: false});
    }

    handleBecomeDesigner() {
        this.handleRequestClose();
        this.setState({openDialog: !this.state.openDialog});
    }
    
    handleClickProfile(event) {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
          open: true,
          anchorEl: event.currentTarget,
        });
    };
    
    handleRequestClose() {
        this.setState({
          open: false
        });
    };

    render() {
        return (
            <List>
                <ListItem primaryText={<b>Hello, {this.props.userData.user.fullname.split(' ')[0]}</b>}
                  onClick={this.handleClickProfile}/>
              <Popover
                  open={this.state.open}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  onRequestClose={this.handleRequestClose}>
                  <Menu>
                    <MenuItem primaryText="Information" onClick={(e, view) => this.handleChoosePopover(e, 'info')}/>
                    <MenuItem primaryText="Manage account" onClick={(e, view) => this.handleChoosePopover(e, 'accUpdate')}/>
                    <MenuItem primaryText="History orders" />
                    {this.props.userData.isDesigner ?
                        <MenuItem primaryText="Create new design" onClick={(e, view) => this.handleChoosePopover(e, 'newShirt')}/> :
                        <MenuItem onClick={this.handleBecomeDesigner} primaryText={"Become designer"} />
                    }
                    {this.props.userData.isDesigner ?
                        <MenuItem primaryText="View my design" /> : null}
                    <MenuItem primaryText="Log out" onClick={this.props.signOutFunc}/>
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
          openCategory: false
        };
        this.handleClickCategory = this.handleClickCategory.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }
    
    handleRequestClose() {
        this.setState({
          openCategory: false
        });
    };
    
    handleClickCategory(event) {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
          openCategory: true,
          anchorEl: event.currentTarget,
        });
    };
    
    componentWillMount() {
        this.props.getCategory();
        this.props.checkSignIn();
    }
//{this.props.categoryData.list.map()...}
    render() {
        console.log(this.props.userData);
        return (
            <Paper style={stylePaper} zDepth={1}>
                <div className="col-sm-2" style={logo}>
                </div>
                <div className="col-sm-7">
                    <List style={flexContainer}>
                      <ListItem primaryText={(<b>Best Sell</b>)} leftIcon={<ActionFavorite />} />
                      <ListItem primaryText={(<b>Newest</b>)} leftIcon={<AvFiberNew />} />
                      <ListItem primaryText={(<b>Promotion</b>)} leftIcon={<ActionCardGiftcard />} />
                      <ListItem primaryText={(<b>Category</b>)} onClick={this.handleClickCategory} leftIcon={<ActionList />} />
                      <Popover
                          open={this.state.openCategory}
                          anchorEl={this.state.anchorEl}
                          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                          targetOrigin={{horizontal: 'left', vertical: 'top'}}
                          onRequestClose={this.handleRequestClose}>
                          <Menu>
                              {this.props.categoryList.listCategory.map( (row, index) => (
                                <MenuItem key={index} primaryText={<b>{row.name}</b>}/>
                              ))}
                          </Menu>
                      </Popover>
                    </List>
                </div>
                <div className="col-sm-3">
                    <div className="col-sm-6">
                        <List style={flexContainer}>
                          <ListItem primaryText={(<b>Cart</b>)} leftIcon={<ActionShoppingCart />} />
                        </List>
                    </div>
                    <div className="col-sm-6">
                        {!this.props.userData.signInSuccess ? <SignIn signInFunc={this.props.signInFunc}
                                                            userData={this.props.userData}
                                                            signUpFunc={this.props.signUpFunc}/> :
                                                            <Profile becomeNewDesigner={this.props.becomeNewDesigner}
                                                             userData={this.props.userData}
                                                             signOutFunc={this.props.signOutFunc}
                                                             changeView={this.props.changeView}/>}
                    </div>
                </div>
                <br/>
            </Paper>
        );
    }
}

export default Navigator;