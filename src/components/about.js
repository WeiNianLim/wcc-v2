import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from '../theme.js'
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import ForwardIcon from "@material-ui/icons/NavigateNext";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AppContext } from '../AppContext';


const styles = {
  divider: {
    margin: '10px 0 0 0',
    height: 3,
    width: "80px",
    backgroundColor: theme.palette.primary.main
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

const About = ({classes, width}) => {
  const { assetUrl } = useContext(AppContext)

  return (
    <section id="aboutMe" style={{ margin: "100px auto 0 auto", paddingTop: "100px", maxWidth: "1000px" }}>
      <Typography variant="h4" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
        About Me
      </Typography>
      <Divider variant="inset" className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h6" style={{ marginTop: "50px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
            Hi there, I'm William! I am a software developer located in Kelowna, BC.{isWidthUp("sm", width)  && <br />}
            I enjoy building exceptional websites and web application that has {isWidthUp("sm", width)  && <br />}
            awesome user-interface.
          </Typography>
          <Typography variant="h6" style={{ marginTop: "20px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.main }}>
            I am currently an Intermediate Software Developer at Acro Media Inc, {isWidthUp("sm", width)  && <br />}
            an ecommerce company building tailored solutions to help companies in building, optimizing scalable digital business.
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
                        Drupal 8
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
                        PHP
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                      </ListItemIcon>
                      <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                        Bootstrap
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                      </ListItemIcon>
                      <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                        Redux
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
                      Drupal 8
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      PHP
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Bootstrap
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ForwardIcon style={{ color: theme.palette.primary.dark }} />
                    </ListItemIcon>
                    <ListItemText style={{ fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.main }}>
                      Redux
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
              alt=""
              src= {`${assetUrl}/images/profile.jpg`}
              style={{ margin: "50px auto 0 auto", borderRadius: "10px", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
            />
          </Grid>
          : <Grid item xs={12} sm={4} alignItems="center" container>
            <img
              alt=""
              src= {`${assetUrl}/images/profile.jpg`}
              style={{ margin: "50px auto 0 auto", borderRadius: "10px", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
            />
          </Grid>
        }
      </Grid>
    </section>
  )
}

export default withWidth()(withStyles(styles)(About))
