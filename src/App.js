import React, {
  Component
} from "react";
import PropTypes from "prop-types";
import {
  withStyles
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import theme from './theme.js'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import withWidth, {
  isWidthUp
} from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    display: 'flex',
    color: theme.palette.secondary.light
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonRoot: {
    color: theme.palette.secondary.light
  },
  buttonLabel: {
    textTransform: 'capitalize'
  },
  appBar: {
    backgroundColor: theme.palette.secondary.main
  },
  main: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 1200,
  }
}

class App extends Component {

  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false
    });
  };

  render() {

    const {
      classes,
      width
    } = this.props;
    const url = window.location.href;

    const renderDesktopAppBar = {

    }

    const renderMobileAppBar = {

    }

    return (
      <div style={{background: theme.palette.secondary.main}}>
        <AppBar position="static" className={classes.appBar}>
          {isWidthUp("sm", width) ? (
            <Toolbar>
              <img src={
                url == "http://localhost:3000/"
                  ? "/images/logo.png"
                  : "https://weinianlim.github.io/wcc2/images/logo.png"
              }
                style={{
                  width: "auto",
                  maxHeight: "45px"
                }} />
              <div className={classes.grow}></div>
              <Button
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  label: classes.buttonLabel
                }}
              >
                About
              </Button>
              <Button
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  label: classes.buttonLabel
                }}
              >
                Experience
              </Button>
              <Button
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  label: classes.buttonLabel
                }}
              >
                Work
              </Button>
              <Button
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  label: classes.buttonLabel
                }}
              >
                Contact
              </Button>
              <Button
                className={classes.button}
                classes={{
                  root: classes.buttonRoot,
                  label: classes.buttonLabel
                }}
              >
                Resume
              </Button>
            </Toolbar>
          ) : (
              <Toolbar>
                <img src={
                  url == "http://localhost:3000/"
                    ? "/images/logo.png"
                    : "https://weinianlim.github.io/wcc2/images/logo.png"
                }
                  style={{
                    width: "auto",
                    maxHeight: "45px"
                  }} />
                <div className={classes.grow}></div>
                <IconButton className={classes.menuButton} onClick={this.handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            )}
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleDrawerClose} anchor='right'>
          <List>
            <ListItem>About</ListItem>
            <ListItem>Experience</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>
              <a
                href={
                  url == "http://localhost:3000/"
                    ? "/images/resume.pdf"
                    : "https://weinianlim.github.io/wcc2/images/resume.pdf"
                }
                target="_blank"
              >
                Resume
              </a>
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.main}>
          <Typography variant="h1" gutterBottom style={{fontFamily: "Roboto", fontWeight: "600", color: theme.palette.secondary.light}}>
            William Lim
          </Typography>
        </main>
      </div>
    )
  }
}

export default withWidth()(withStyles(styles)(App))


{
  /* <AppBar position="static" style={{ backgroundColor: theme.palette.primary.dark}}>
            <Toolbar>
              <img
                src={
                  url == "http://localhost:3000/"
                    ? "/images/logo.png"
                    : "https://weinianlim.github.io/wcc2/images/logo.png"
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
                      : "https://weinianlim.github.io/wcc2/images/resume.pdf"
                  }
                  target="_blank"
                  className={classes.resumeInDrawer}
                >
                  Resume
                </a>
              </ListItem>
            </List>
          </Drawer> */
}