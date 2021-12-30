import React, { useEffect, useState, useContext } from "react";
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
import { AppContext } from '../AppContext'

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
  const { assetUrl } = useContext(AppContext)

  const [open, setOpen] = useState(false)
  const [backgroundShadow, setBackgroundShadow] = useState("none")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  useEffect(() => () => {
    window.removeEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = event => {
    setBackgroundShadow(window.pageYOffset > 200 ? "inset 0px -7px 11px -10px rgba(32,77,75,1)" : "none");
  };

  const {classes, width} = props;

  const navs = [
    { label: "About", href: "#aboutMe", target: "_self" },
    { label: "Experience", href: "#experience", target: "_self" },
    { label: "Work", href: "#work", target: "_self" },
    { label: "Contact", href: "#contact", target: "_self" },
    { label: "Resume", href: `${assetUrl}/images/resume.pdf`, target: "_blank" },
  ]

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} style={{ boxShadow: backgroundShadow }}>
          {isWidthUp("sm", width) ? (
            <Toolbar>
              <a href="#landing" className={classes.anchorTag}>
                <img
                  alt="William Lim Site's Logo"
                  src= {`${assetUrl}/images/logo.png`}
                  style={{ width: "auto", maxHeight: "45px" }}
                />
              </a>
              <div className={classes.grow}></div>
              { navs.map(nav => 
                <Button
                  className={classes.button}
                  classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}
                  href={nav.href}
                  target={nav.target}
                >
                  {nav.label}
                </Button>
              )}
            </Toolbar>
          ) : (
              <Toolbar>
                <a href="#landing" className={classes.anchorTag}>
                  <img
                    alt="William Lim Site's Logo"
                    src={`${assetUrl}/images/logo.png`}
                    style={{ width: "auto", maxHeight: "45px" }}
                  />
                </a>
                <div className={classes.grow}></div>
                <IconButton className={classes.menuButton} onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            )}
        </AppBar>
      </HideOnScroll>
      <Drawer classes={{ root: classes.drawer }} open={open} onClose={() => setOpen(false)} anchor='right'>
        <List>
          { navs.map(nav => 
            <ListItem>
              <Button
                className={classes.button}
                classes={{ root: classes.drawerButtonRoot, label: classes.buttonLabel }}
                onClick={() => setOpen(false)}
                href={nav.href}
                target={nav.target}
              >
                {nav.label}
              </Button>
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  )
}

export default withWidth()(withStyles(styles)(Nav))
