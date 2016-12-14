import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import BecomeDesigner from './../navigator/BecomeDesigner';

import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ImagePalette from 'material-ui/svg-icons/image/palette';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          openDialog: false
        };
        this.handleBecomeDesigner = this.handleBecomeDesigner.bind(this);
    }
    
    handleBecomeDesigner() {
        this.setState({openDialog: !this.state.openDialog});
    }
    
    render() {
        return (
            <div>
                <List><ListItem primaryText="Information"
                                leftIcon={<ActionAccountCircle />}
                                onClick={() => this.props.changeView('info')}/></List>
                    <Divider />
                <List><ListItem primaryText="Manage account"
                                leftIcon={<ActionSettings />}
                                onClick={() => this.props.changeView('accUpdate')}/></List>
                    <Divider />
                <List><ListItem primaryText="History orders" leftIcon={<ActionHistory />} /></List>
                    <Divider />
                {this.props.userData.isDesigner ?
                    <z>
                        <List><ListItem primaryText="View my design" leftIcon={<ActionViewList />} /></List>
                            <Divider />
                        <List><ListItem primaryText="Create new design"
                                        leftIcon={<ContentCreate />}
                                        onClick={() => this.props.changeView('newShirt')}/></List>
                    </z>
                    :
                    <List><ListItem primaryText="Become designer"
                                    leftIcon={<ImagePalette />}
                                    onClick={this.handleBecomeDesigner}/></List>
                }
                <BecomeDesigner openDialog = {this.state.openDialog}
                              closeDialog = {this.handleBecomeDesigner}
                              becomeNewDesigner={this.props.becomeNewDesigner}/>
            </div>
        );
    }
}

export default SideBar;