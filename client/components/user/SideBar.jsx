import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
import ContentCreate from 'material-ui/svg-icons/content/create';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <List><ListItem primaryText="Information" leftIcon={<ActionAccountCircle />} /></List>
                    <Divider />
                <List><ListItem primaryText="Manage account" leftIcon={<ActionSettings />} /></List>
                    <Divider />
                <List><ListItem primaryText="History orders" leftIcon={<ActionHistory />} /></List>
                    <Divider />
                <List><ListItem primaryText="View my design" leftIcon={<ActionViewList />} /></List>
                    <Divider />
                <List><ListItem primaryText="Create new design" leftIcon={<ContentCreate />} /></List>
            </div>
        );
    }
}

export default SideBar;