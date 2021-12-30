import React from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from './theme.js'
import withWidth from "@material-ui/core/withWidth";
import Footer from './components/footer'
import Contact from './components/contact'
import Work from './components/work'
import Experience from './components/experience'
import About from './components/about'
import Nav from './components/nav'
import Landing from './components/landing'
import { AppContext } from './AppContext'

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
  
const { href } = window.location;

const ASSETS_URL = "https://williamlim26.github.io/wcc";
const GITHUB = "https://github.com/williamlim26";
const EMAIL = "weinianlim26@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/williamwnl/";

const App = ({ classes }) => {
  return (
    <AppContext.Provider 
      value={{ 
        assetUrl: href.includes("http://localhost:3000/") ? "" : ASSETS_URL,
        EMAIL,
        GITHUB,
        LINKEDIN
      }}
    >
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
    </AppContext.Provider>
  )
}

export default withWidth()(withStyles(styles)(App))

