import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import theme from './theme.js'

class App extends Component{

  state={
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

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
            <IconButton onClick={this.handleDrawerOpen}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleDrawerClose}>
          <List>
            <ListItem>
              <a
                href={
                  url == "http://localhost:3000/"
                    ? "/images/resume.pdf"
                    : "https://weinianlim.github.io/William-Can-Code/images/resume.pdf"
                }
                target="_blank"
                className={classes.resumeInDrawer}
              >
                Resume
              </a>
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
}



export default App
