import React, { Component } from "react";
import theme from '../theme.js'
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const styles = {
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

class Work extends Component{
  
  render (){

    const {classes, width} = this.props;
    const url = window.location.href;

    return (
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
    )
  }
}

export default withWidth()(withStyles(styles)(Work))
