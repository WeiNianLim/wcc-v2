import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from '../theme.js'
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  contactButtonRoot: {
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    padding: "15px 30px",
  },
  button: {
    margin: theme.spacing(1),
    "&:hover": {
      fontWeight: "600",
      color: theme.palette.primary.main
    }
  },
  buttonLabel: {
    textTransform: 'capitalize',
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
}

class Landing extends Component{
  
  render (){

    const {classes, width} = this.props;
    const url = window.location.href;

    return (
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
          target="_blank"
        >
          Let's talk 
        </Button>
      </section>
    )
  }
}

export default withWidth()(withStyles(styles)(Landing))
