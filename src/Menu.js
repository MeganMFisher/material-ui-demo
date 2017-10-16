import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';



export default class Menu extends Component {
constructor(props) {
    super(props);
        
    this.state = {
        open: false
    };
}
    
handleToggle = () => this.setState({open: !this.state.open});
    
handleClose = () => this.setState({open: false});

render() {
    return (
        <div>
        <AppBar
            title='Material-ui Demo'
            onClick={this.handleToggle}
        ></AppBar>

      <Drawer
        docked={false}
        width={300}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}>
        <List>
          <Subheader>Nested List Items</Subheader>
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
          <ListItem
            primaryText="Inbox"
            leftIcon={<ContentInbox />}
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Starred"
                leftIcon={<ActionGrade />}
              />,
              <ListItem
                key={2}
                primaryText="Sent Mail"
                leftIcon={<ContentSend />}
                disabled={true}
                nestedItems={[
                  <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                ]}
              />,
              <ListItem
                key={3}
                primaryText="Inbox"
                leftIcon={<ContentInbox />}
                open={this.state.open}
                onNestedListToggle={this.handleNestedListToggle}
                nestedItems={[
                  <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                ]}
              />,
            ]}
          />
        </List>
      </Drawer>
        </div>
    )
}


}