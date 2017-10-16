import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
// RAISED BUTTON //
import RaisedButton from 'material-ui/RaisedButton';
// STAR ICON BUTTON //
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';

class App extends Component {
  render() {
    return (
      <div >
        <Menu/>


        {/* <RaisedButton label="Click Me" />

        <IconButton>
          <ActionGrade />
        </IconButton> */}

      </div>
    );
  }
}

export default App;
