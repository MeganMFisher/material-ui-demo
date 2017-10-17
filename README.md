# Material-UI

## What is it?

A Set of React Components that Implement Google's Material Design.

##### What is Google's Material Design?

A visual language that synthesizes the classic principles of good design with the innovation and possibility of technology and science.


## Why is it useful?

You can easily add elements from Google's Material Design into your application to make the UI much more sleek and professional looking.


# Installation: 

In your terminal run the following command to install material-ui.

`npm install material-ui`

Material-UI was designed with the Roboto font in mind. So be sure to include it in your project in your css file if you would like the rest of your fonts match theirs.

App.css: 
```
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

body {
    font-family: Roboto;
}
```


# Getting started: 

The quickest way to get up and running is by using the MuiThemeProvider to inject the theme into your application. 

In your index.js import MuiThemeProvider and wrap the app component with MuiThemeProvider.

```
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <App />,
    <MuiThemeProvider>
  document.getElementById('app')
);
```

## How easy is it?: 

After you set up MuiThemeProvider to use a raised button in material-ui you simply import RaisedButton from material-ui/RaisedButton and then insert the component into your application. Now you have a fully styled raised button. Its that simple.


```
import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <div >
        <RaisedButton label="Click Me" />
      </div>
    );
  }
}

export default App;
```




# Resources: 
- https://www.npmjs.com/package/material-ui
- https://github.com/callemall/material-ui/blob/master/src/index.js
- https://material.io/guidelines/#introduction-principles
