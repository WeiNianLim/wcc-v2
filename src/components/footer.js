import React, { useContext } from "react";
import theme from '../theme.js'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { AppContext } from '../AppContext';

const Footer = () => {
  const { EMAIL, GITHUB, LINKEDIN } = useContext(AppContext);

  const Socials = [
    { 
      href: `mailto:${EMAIL}`,
      icon: "im im-mail",
    },
    { 
      href: LINKEDIN,
      icon: "im im-linkedin",
    },
    { 
      href: GITHUB,
      icon: "im im-github",
    },
  ]

  return (
    <section style={{ marginTop: "180px", paddingTop: "25px", paddingBottom: "25px", textAlign: "center", boxShadow: "inset -1px 11px 8px -12px rgba(32,77,75,1)" }} >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        { Socials.map(social => 
            <Grid item>
              <Button href={social.href} target="_blank">
                <i class={social.icon} style={{ color: theme.palette.secondary.light }} />
              </Button>
            </Grid>
        )}
      </Grid>
      <Typography variant="subtitle1" style={{ marginTop: "5px", fontFamily: "Roboto", fontWeight: "400", color: theme.palette.secondary.light }}>
        Designed and built by William Lim
      </Typography>
    </section>
  )
}

export default Footer