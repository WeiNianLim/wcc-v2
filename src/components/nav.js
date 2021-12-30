import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import theme from '../theme.js'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const styles = {
  appBar: {
    backgroundColor: theme.palette.secondary.dark,
    boxShadow: '0px 1px 1px #de1dde',
    width: "100%",
    right: 0,
    left: 0
  },
  menuButton: {
    display: 'flex',
    color: theme.palette.secondary.light
  },
  button: {
    margin: theme.spacing(1),
    "&:hover": {
      fontWeight: "600",
      color: theme.palette.primary.main
    }
  },
  buttonRoot: {
    color: theme.palette.secondary.light
  },
  drawerButtonRoot: {
    color: theme.palette.secondary.main
  },
  buttonLabel: {
    textTransform: 'capitalize',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    paddingRight: "100px",
    paddingLeft: "100px",
    [theme.breakpoints.down('md')]: {
      paddingRight: "50px",
      paddingLeft: "50px",
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: "25px",
      paddingLeft: "25px",
    }
  },
  anchorTag: {
    textDecoration: "none",
    color: theme.palette.secondary.light,
    paddingLeft: 10,
    paddingRight: 10,
    "&:hover": {
      fontWeight: "600",
      color: theme.palette.primary.main
    }
  },
  drawer: {
    backgroundColor: theme.palette.secondary.dark
  }
}


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

class Nav extends Component{

  state = {
    open: false,
    backgroundShadow: "none",
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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

  handleScroll = event => {
    if (window.pageYOffset > 200) {
      this.setState({
        backgroundShadow:
          "inset 0px -7px 11px -10px rgba(32,77,75,1)",
      });
    } else {
      this.setState({
        backgroundShadow: "none"
      });
    }
  };
  
  render (){

    const {classes, width} = this.props;
    const url = window.location.href;

    return (
      <>
        <HideOnScroll {...this.props}>
          <AppBar className={classes.appBar} style={{ boxShadow: this.state.backgroundShadow }}>
            {isWidthUp("sm", width) ? (
              <Toolbar>
                <a
                  href="#landing"
                  className={classes.anchorTag}
                >
                  <img
                    src=
                    {
                      url.includes("http://localhost:3000/")
                        ? "/images/logo.png"
                        : "https://williamlim26.github.io/wcc2/images/logo.png"
                    }
                    style={{
                      width: "auto",
                      maxHeight: "45px"
                    }}
                  />
                </a>
                <div className={classes.grow}></div>
                <Button
                  className={classes.button}
                  classes={{
                    root: classes.buttonRoot,
                    label: classes.buttonLabel
                  }}
                  href="#aboutMe"
                >
                  About
                </Button>
                <Button
                  className={classes.button}
                  classes={{
                    root: classes.buttonRoot,
                    label: classes.buttonLabel
                  }}
                  href="#experience"
                >
                  Experience
                </Button>
                <Button
                  className={classes.button}
                  classes={{
                    root: classes.buttonRoot,
                    label: classes.buttonLabel
                  }}
                  href="#work"
                >
                  Work
                </Button>
                <Button
                  className={classes.button}
                  classes={{
                    root: classes.buttonRoot,
                    label: classes.buttonLabel
                  }}
                  href="#contact"
                >
                  Contact
                </Button>
                <Button
                  className={classes.button}
                  classes={{
                    root: classes.buttonRoot,
                    label: classes.buttonLabel
                  }}
                  href={
                    url.includes("http://localhost:3000/")
                      ? "/images/resume.pdf"
                      : "https://williamlim26.github.io/wcc2/images/resume.pdf"
                  }
                  target="_blank"
                >
                  Resume
                </Button>
              </Toolbar>
            ) : (
                <Toolbar>
                  <a
                  href="#landing"
                  className={classes.anchorTag}
                  >
                    <img
                      src={
                        url.includes("http://localhost:3000/")
                          ? "/images/logo.png"
                          : "https://williamlim26.github.io/wcc2/images/logo.png"
                      }
                      style={{
                        width: "auto",
                        maxHeight: "45px"
                      }} 
                    />
                  </a>
                  <div className={classes.grow}></div>
                  <IconButton className={classes.menuButton} onClick={this.handleDrawerOpen}>
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              )}
          </AppBar>
        </HideOnScroll>
        <Drawer classes={{ root: classes.drawer }} open={this.state.open} onClose={this.handleDrawerClose} anchor='right'>
          <List>
            <ListItem>
              <Button
                className={classes.button}
                classes={{
                  root: classes.drawerButtonRoot,
                  label: classes.buttonLabel
                }}
                href="#aboutMe"
                onClick={this.handleDrawerClose}
              >
                About
              </Button>
            </ListItem>
            <ListItem>
              <Button
                className={classes.button}
                classes={{
                  root: classes.drawerButtonRoot,
                  label: classes.buttonLabel
                }}
                href="#experience"
                onClick={this.handleDrawerClose}
              >
                Experience
              </Button>
            </ListItem>
            <ListItem>
              <Button
                className={classes.button}
                classes={{
                  root: classes.drawerButtonRoot,
                  label: classes.buttonLabel
                }}
                href="#work"
                onClick={this.handleDrawerClose}
              >
                Work
              </Button>
            </ListItem>
            <ListItem>
              <Button
                className={classes.button}
                classes={{
                  root: classes.drawerButtonRoot,
                  label: classes.buttonLabel
                }}
                href="#contact"
                onClick={this.handleDrawerClose}
              >
                Contact
              </Button>
            </ListItem>
            <ListItem>
              <Button
                className={classes.button}
                classes={{
                  root: classes.drawerButtonRoot,
                  label: classes.buttonLabel
                }}
                href={
                  url.includes("http://localhost:3000/")
                    ? "/images/resume.pdf"
                    : "https://williamlim26.github.io/wcc2/images/resume.pdf"
                }
                target="_blank"
                onClick={this.handleDrawerClose}
              >
                Resume
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </>
    )
  }
}

export default withWidth()(withStyles(styles)(Nav))
