import React, { Component } from "react";
import theme from '../theme.js'
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  contactButtonRoot: {
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    padding: "15px 30px",
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

class Contact extends Component{
  
  render (){

    const {classes, width} = this.props;

    return (
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
    )
  }
}

export default withWidth()(withStyles(styles)(Contact))
