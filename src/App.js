import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import DialogBox from './components/DialogBox';

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
