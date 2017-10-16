# Material-UI


## Installation: 

`npm install material-ui`

Material-UI was designed with the Roboto font in mind. So be sure to include it in your project in your css file.

App.css: 
```
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

body {
    font-family: Roboto;
}
```


## Getting started: 

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

## Raised Button: 

Import RaisedButton from material-ui/RaisedButton. Then insert that component into your return. 

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




### Resources: 
- https://www.npmjs.com/package/material-ui
- https://github.com/callemall/material-ui/blob/master/src/index.js
