import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import theme from './theme.js'

class App extends Component{

  render(){

    const { classes, width } = this.props;
    const url = window.location.href;

    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: theme.palette.primary.dark}}>
          <Toolbar>
            <img
              src={
                url == "http://localhost:3000/"
                  ? "/images/logo.png"
                  : "https://weinianlim.github.io/William-Can-Code/images/logo.png"
              }
              style={{
                width: "auto",
                maxHeight: "45px"
              }}
            />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}



export default App
