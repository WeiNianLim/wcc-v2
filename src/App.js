import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import theme from './theme.js'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ForwardIcon from "@material-ui/icons/NavigateNext";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  appBar: {
    backgroundColor: theme.palette.secondary.dark,
    boxShadow: '0px 1px 1px #de1dde',
    width: "100%",
    right: 0,
    left: 0
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
    "&:hover": {
      fontWeight: "600",
      color: theme.palette.primary.main
    }
  },
  icon: {
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

class App extends Component {

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

  render() {

    const {
      classes,
      width
    } = this.props;
    const url = window.location.href;

    return (
      <div style={{ background: theme.palette.secondary.dark, margin: "0" }}>
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
                        : "https://weinianlim.github.io/wcc2/images/logo.png"
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
                      : "https://weinianlim.github.io/wcc2/images/resume.pdf"
                  }
                  target="_blank"
                >
                  Resume
                </Button>
              </Toolbar>
            ) : (
                <Toolbar>
                  <img
                    src={
                      url.includes("http://localhost:3000/")
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
                    : "https://weinianlim.github.io/wcc2/images/resume.pdf"
                }
                target="_blank"
                onClick={this.handleDrawerClose}
              >
                Resume
              </Button>
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.main}>
          <section id="landing" style={{ paddingTop: "150px" }}>
            <Typography variant={isWidthUp("sm", width) ? "h1" : "h3"} style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.primary.main }}>
              William Lim
              </Typography>
            <Typography variant={isWidthUp("sm", width) ? "h1" : "h3"} style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "450", color: theme.palette.secondary.light }}>
              I build things for the Internet
              </Typography>
            <Typography variant="h6" style={{ marginTop: "50px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
              I am a software engineer based in Vancouver, BC specializing in {isWidthUp("sm", width) && <br />}building exceptional, responsive and high quality {isWidthUp("sm", width) && <br />}Websites and Web Applications
            </Typography>
            <Button
              variant="outlined"
              className={classes.button}
              classes={{
                root: classes.contactButtonRoot,
                label: classes.buttonLabel
              }}
              color="theme.palette.primary.main"
              style={{ marginTop: "50px", marginLeft: "0px", }}
              href="mailto:weinianlim26@gmail.com"
            >
              Let's talk
            </Button>
          </section>
          <section id="aboutMe" style={{ margin: "100px auto 0 auto", paddingTop: "100px", maxWidth: "1000px" }}>
            <Typography variant="h4" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
              About Me
            </Typography>
            <Divider variant="inset" className={classes.divider} />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6" style={{ marginTop: "50px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  Hi there, I'm William! I am a software engineer located in Vancouver, BC.{isWidthUp("sm", width)  && <br />}
                  I enjoy building exceptional websites and web application that has {isWidthUp("sm", width)  && <br />}
                  awesome user-interface.
                </Typography>
                <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  I am currently a Full Stack Developer at Porton Health Corp, {isWidthUp("sm", width)  && <br />}
                  a vancouver based startup that provides telehealth platform.
                </Typography>
                <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  Here are some of the Technologies that I am working with daily,
                </Typography>
                <Grid container spacing={3}>
                  {isWidthUp("sm", width)
                    ? <>
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
                    </>
                    : <Grid item xs>
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
                  }
                </Grid>
              </Grid>
              {isWidthUp("sm", width)
                ? <Grid item xs={12} sm={4}>
                  <img
                    src={
                      url.includes("http://localhost:3000/")
                        ? "/images/profile.jpg"
                        : "https://weinianlim.github.io/wcc2/images/profile.jpg"
                    }
                    style={{ margin: "50px auto 0 auto", borderRadius: "10px", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
                  />
                </Grid>
                : <Grid item xs={12} sm={4} alignItems="center" container>
                  <img
                    src={
                      url.includes("http://localhost:3000/")
                        ? "/images/profile.jpg"
                        : "https://weinianlim.github.io/wcc2/images/profile.jpg"
                    }
                    style={{ margin: "50px auto 0 auto", borderRadius: "10px", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
                  />
                </Grid>
              }
            </Grid>
          </section>
          <section id="experience" style={{ marginTop: "100px", paddingTop: "100px", paddingBottom: "70px", marginBottom: "50px" }}>
            <Typography variant="h4" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
              Places I've worked at
            </Typography>
            <Divider variant="inset" className={classes.divider} style={{ marginBottom: "50px" }} />
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
                  Full Stack Developer @ Porton Health Corp
                </Typography>
                <List >
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Developed and maintained software features in Porton Health web app using React, ES6, HTML and CSS
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Worked closely with other developers to ensure thoughtful and coherent user experience across Porton’s web app
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Proposed, redesigned and built a responsive blog section using Material-UI, which helped improve user traffic by 50%
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Implemented OSCAR EMR integration with Portion’s web app which increased potential customers by 300%
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Tested Web App in various browser and devices to ensure cross-browser compatibility and mobile responsiveness
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
                  Software Engineer @ Clarius Mobile Health
                </Typography>
                <List >
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Architected and developed Google Cast feature in Clarius cross platform mobile app in Qt and Java
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Researched and built Speech Recognition feature with CMUSphinx as an online/offline speech control for Clarius wireless portable ultrasound probe
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Maintained software functionality periodically to ensure the reproducibility of the software within Linux system
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Implemented and shipped WiFi-Direct autoconnect feature which allowed devices to connect to wireless ultrasound probe seamlessly
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </section>
          <section id="work" style={{ margin: "50px auto 0 auto", paddingTop: "30px", maxWidth: "1000px" }}>
            <Typography variant="h4" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
              A Glance At My Projects
            </Typography>
            <Divider variant="inset" className={classes.divider} style={{ marginBottom: "50px" }} />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={5}>
                <img
                  src={
                    url.includes("http://localhost:3000/")
                      ? "/images/wa.png"
                      : "https://weinianlim.github.io/wcc2/images/wa.png"
                  }
                  style={{ margin: "50px auto 0 auto", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Typography variant="h5" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
                  Enjoy My Food
                </Typography>
                <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  A web app built with React, Node.js,
                  Express and MongoDB, a platform
                  where people can sell their food
                  products
                </Typography>
              </Grid>
              {isWidthUp("sm", width)
                ? <>
                    <Grid item xs={12} sm={7}>
                      <Typography variant="h5" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
                        Fun Math
                        </Typography>
                      <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                        An android app built with AndEngine, an
                        education app that teaches kids to count
                        better
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <img
                        src={
                          url.includes("http://localhost:3000/")
                            ? "/images/ma.png"
                            : "https://weinianlim.github.io/wcc2/images/ma.png"
                        }
                        style={{ margin: "50px auto 0 auto", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
                      />
                    </Grid>
                  </>
                : <>
                    <Grid item xs={12} sm={5}>
                      <img
                        src={
                          url.includes("http://localhost:3000/")
                            ? "/images/ma.png"
                            : "https://weinianlim.github.io/wcc2/images/ma.png"
                        }
                        style={{ margin: "50px auto 0 auto", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
                      />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Typography variant="h5" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
                        Fun Math
                      </Typography>
                      <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                        An Android App built with AndEngine, an
                        education app that teaches kids to count
                        better
                      </Typography>
                    </Grid>
                  </>
              }
            </Grid>
          </section>
          <section id="contact" style={{ marginTop: "100px", paddingTop: "100px" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant={isWidthUp("sm", width) ? "h2" : "h3"} style={{ marginTop: "10px", textAlign: "center", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.primary.light }}>
                  Let's Get In Touch!
                </Typography>
              </Grid>
              <Grid item>
                <Divider variant="inset" className={classes.divider} />
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ maxWidth: "700px", textAlign: "center", marginTop: "50px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
                  I am currently looking for new existing opportunities, whether it is for a position or project or just to say hi, feel free to shoot me an email
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.button}
                  classes={{
                    root: classes.contactButtonRoot,
                    label: classes.buttonLabel
                  }}
                  color="theme.palette.primary.main"
                  style={{ marginTop: "50px", marginLeft: "0px" }}
                  href="mailto:weinianlim26@gmail.com"
                >
                  Say Hi
                </Button>
              </Grid>
            </Grid>
          </section>
        </main>
        <section style={{ marginTop: "180px", paddingTop: "25px", paddingBottom: "25px", textAlign: "center", boxShadow: "inset -1px 11px 8px -12px rgba(32,77,75,1)" }} >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Button href="mailto:weinianlim26@gmail.com">
                <i class="im im-mail" style={{ color: theme.palette.secondary.light }} />
              </Button>
            </Grid>
            <Grid item>
              <Button href="https://www.linkedin.com/in/williamwnl/" target="_blank">
                <i class="im im-linkedin" style={{ color: theme.palette.secondary.light }} />
              </Button>
            </Grid>
            <Grid item>
              <Button href="https://github.com/WeiNianLim" target="_blank">
                <i class="im im-github" style={{ color: theme.palette.secondary.light }} />
              </Button>
            </Grid>
          </Grid>
          <Typography variant="subtitle1" style={{ marginTop: "5px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.light }}>
            Designed and built by William Lim
          </Typography>
        </section>
      </div>
    )
  }
}

export default withWidth()(withStyles(styles)(App))

