# Material-UI

## Installation: 

`npm install material-ui`


Material-UI was designed with the Roboto font in mind. So be sure to include it in your project.

`@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');`

## Getting started: 

The quickest way to get up and running is by using the MuiThemeProvider to inject the theme into your application. 

`npm install material-ui/styles/MuiThemeProvider`

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

### Resources: 
- https://www.npmjs.com/package/material-ui
- 