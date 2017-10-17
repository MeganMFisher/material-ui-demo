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

## Adding a side menu: 




## Adding a dialog modal:

Open up the DialogBox.js Component. 

We will need to import Dialog, FlatButton, RaisedButton from material-ui.

```
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
```

Create a property on state called open and set it to false. This will be what tells the modal to not open initially. 

```
    state = {
      open: false,
    };
```

Now we need to create a method that will open the modal and a method to close the modal. 

```
      handleOpen = () => {
        this.setState({
          open: true
        });
      };
    
      handleClose = () => {
        this.setState({
          open: false
        });
      };
```

In your return create a raised button with a label of delete that on click will fire the handleOpen method. 

```
        return (
          <div>
            <RaisedButton label="Delete" onClick={this.handleOpen} />
          </div>
        );
```

Below your return create a dialog component with title equal to 'Are you sure you want to delete this?', modal equal to false, open equal to this.state.open, and onRequestClose equal to this.handle close. You can look up what each of these do at http://www.material-ui.com/#/components/dialog. 

Add actions equal to actions and in the next step we will create the actions. 

```
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
```

Above your return in your render, add an array called actions that has two items. The they are both flat buttons with primary equal to true and onClick equal to this.handleClose. The first should have a lable of 'Cancel' and the second should have a label of 'Delete and a keyboardFocused set to true. You can look up what each of these do at http://www.material-ui.com/#/components/flat-button.

```
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

```

You should now have a working dialog modal component that you can import and inject into your app.js

```
import React, { Component } from 'react';
import './App.css';
import DialogBox from './components/DialogBox';

class App extends Component {
  render() {
    return (
      <div >
        <DialogBox/>
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
