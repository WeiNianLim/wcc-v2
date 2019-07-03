import React, { Component } from "react";
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
  },
}

class Experience extends Component{
  
  render (){

    const {classes, width} = this.props;

    return (
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
    )
  }
}

export default withWidth()(withStyles(styles)(Experience))
