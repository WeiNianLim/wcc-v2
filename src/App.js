import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from './theme.js'
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Footer from './components/footer'
import Contact from './components/contact'
import Work from './components/work'
import Experience from './components/experience'
import About from './components/about'
import Nav from './components/nav'
import Landing from './components/landing'

const styles = {
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
  }
}


class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div style={{ background: theme.palette.secondary.dark, margin: "0" }}>
        <Nav/>
        <main className={classes.main}>
          <Landing/>
          <About/>
          <Experience/>
          <Work/>
          <Contact/>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default withWidth()(withStyles(styles)(App))

