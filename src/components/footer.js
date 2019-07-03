import React, { Component } from "react";
import theme from '../theme.js'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

class Footer extends Component{
  render (){
    return (
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
    )
  }
}

export default Footer