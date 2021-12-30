import React, { useEffect, useState } from "react";
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

const Nav = (props) => {

  const [open, setOpen] = useState(false)
  const [backgroundShadow, setBackgroundShadow] = useState("none")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false)
  };

  const handleScroll = event => {
    setBackgroundShadow(window.pageYOffset > 200 ? "inset 0px -7px 11px -10px rgba(32,77,75,1)" : "none");
  };

  const {classes, width} = props;
  const url = window.location.href;

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} style={{ boxShadow: backgroundShadow }}>
          {isWidthUp("sm", width) ? (
            <Toolbar>
              <a
                href="#landing"
                className={classes.anchorTag}
              >
                <img
                  alt="William Lim Site's Logo"
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
                    alt="William Lim Site's Logo"
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
                <IconButton className={classes.menuButton} onClick={handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            )}
        </AppBar>
      </HideOnScroll>
      <Drawer classes={{ root: classes.drawer }} open={open} onClose={handleDrawerClose} anchor='right'>
        <List>
          <ListItem>
            <Button
              className={classes.button}
              classes={{
                root: classes.drawerButtonRoot,
                label: classes.buttonLabel
              }}
              href="#aboutMe"
              onClick={handleDrawerClose}
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
              onClick={handleDrawerClose}
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
              onClick={handleDrawerClose}
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
              onClick={handleDrawerClose}
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
              onClick={handleDrawerClose}
            >
              Resume
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default withWidth()(withStyles(styles)(Nav))
