import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';



export default class Menu extends Component {
constructor(props) {
    super(props);
        
    this.state = {
        open: false
    };
}
    
handleToggle = () => {
    this.setState({
        open: !this.state.open
    });
}
    

render() {
    return (
        <div>
        <nav>
          <IconButton onClick={this.handleToggle}>
            <ActionGrade />
          </IconButton>
        </nav>

      <Drawer
        docked={false} 
        width={300} 
        open={this.state.open} 
        onRequestChange={(open) => this.setState({open})}>
        <List>
          <ListItem primaryText="Home" />
          <ListItem primaryText="About" />
          <ListItem
            primaryText="Store"
            nestedItems={[
              <ListItem
                primaryText="Tops"
              />,
              <ListItem
                primaryText="Bottoms"
              />,
              <ListItem
                primaryText="Accessories"
                nestedItems={[
                  <ListItem primaryText="Hats" />,
                  <ListItem primaryText="Jewelry" />,
                  <ListItem kprimaryText="Scarves" />,
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