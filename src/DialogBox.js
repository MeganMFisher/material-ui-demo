import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class DialogBox extends Component {
    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
    
      render() {
        const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
          />,
          <FlatButton
            label="Delete"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleClose}
          />,
        ];
    
        return (
          <div>
            <RaisedButton label="Delete" onClick={this.handleOpen} />
            <Dialog
              title="Are you sure you want to delete this?"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >             
            </Dialog>
          </div>
        );
      }
}