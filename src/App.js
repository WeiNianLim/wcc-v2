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
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ForwardIcon from "@material-ui/icons/Forward";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  appBar: {
    backgroundColor: theme.palette.secondary.dark
  },
  contactButtonRoot: {
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    padding: "15px 30px",
  },
  menuButton: {
    display: 'flex',
    color: theme.palette.secondary.light
  },
  divider: {
    margin: '10px 0 0 0',
    height: 3,
    width: "80px",
    backgroundColor: theme.palette.primary.main
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonRoot: {
    color: theme.palette.secondary.light
  },
  buttonLabel: {
    textTransform: 'capitalize',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 1200,
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

    return (
      <div style={{ background: theme.palette.secondary.dark, paddingTop: "150px" }}>
        <HideOnScroll {...this.props}>
          <AppBar className={classes.appBar}>
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
                  <img
                    src={
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
        </HideOnScroll>
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
          <section>
            <Typography variant="h1" style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.primary.main }}>
              William Lim
            </Typography>
            <Typography variant="h1" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "450", color: theme.palette.secondary.light }}>
              I build Web Application
            </Typography>
            <Typography variant="h6" style={{ marginTop: "50px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
              I am a software engineer based in Vancouver, BC specializing in <br /> building exceptional, responsive and high quality <br /> Websites and Web Applications
            </Typography>
            <Button
              variant="outlined"
              className={classes.button}
              classes={{
                root: classes.contactButtonRoot,
                label: classes.buttonLabel
              }}
              color="theme.palette.primary.main"
              style={{ marginTop: "50px", marginLeft: "0px" }}
            >
              Let's talk
            </Button>
          </section>
          <section style={{ marginTop: "200px" }}>
            <Typography variant="h4" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
              About Me
            </Typography>
            <Divider variant="inset" className={classes.divider} />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6" style={{ marginTop: "50px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  Hi there, I'm William! I am a software engineer located in Vancouver, BC.<br />
                  I enjoy building exceptional websites and web application that has <br />
                  awesome user-interface.
                </Typography>
                <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  I am currently a Full Stack Developer at Porton Health Corp, <br />
                  a vancouver based startup that provides telehealth platform.
                </Typography>
                <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  Here are some of the Technologies that I am workign with daily,
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <List >
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          Javascript(ES5 & ES6)
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          React
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          Material-UI
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <List >
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          HTML & CSS
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          Node.js
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                        </ListItemIcon>
                        <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                          Material-UI
                        </ListItemText>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  src={
                    url == "http://localhost:3000/"
                      ? "/images/profile.jpg"
                      : "https://weinianlim.github.io/wcc2/images/profile.jpg"
                  }
                  style={{ marginTop: "50px", borderRadius: "10px", maxWidth: "300px", height: "auto" }}
                />
              </Grid>
            </Grid>
          </section>
          <section style={{ marginTop: "200px" }}>
            
          </section>
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