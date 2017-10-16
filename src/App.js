import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import DialogBox from './DialogBox';

class App extends Component {
  render() {
    return (
      <div >
        <Menu/>

        <DialogBox/>

      </div>
    );
  }
}

export default App;
