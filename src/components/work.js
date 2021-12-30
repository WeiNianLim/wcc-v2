import React, { useState, useContext } from "react";
import theme from '../theme.js'
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { AppContext } from '../AppContext';

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

const Work = (props) => {
  const { assetUrl } = useContext(AppContext)

  const [openEMF, setOpenEMF] = useState(false);
  const [openFM, setOpenFM] = useState(false);
  const emfList = ["1", "2", "3", "4", "5", "6"];
  const fmList = ["ma1", "ma2", "ma3", "ma4"];

  const handleOpenDialog = (dialog) => {
    if (dialog === "emf"){
      setOpenEMF(true)
    } else {
      setOpenFM(true)
    }
  }

  const handleCloseDialog = () => {
    setOpenEMF(false)
    setOpenFM(false)
  }
  

  const {classes, width} = props;
  const url = window.location.href;

  return (
    <section id="work" style={{ margin: "50px auto 0 auto", paddingTop: "30px", maxWidth: "1000px" }}>
      <Typography variant="h4" style={{ marginTop: "10px", fontFamily: "Roboto", fontWeight: "500", color: theme.palette.secondary.light }}>
        A Glance At My Projects
      </Typography>
      <Divider variant="inset" className={classes.divider} style={{ marginBottom: "50px" }} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={5}>
          <Button onClick={() => handleOpenDialog("emf")}>
            <img
              alt=""
              src={`${assetUrl}/images/wa.png`}
              style={{ margin: "50px auto 0 auto", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
            />
          </Button>
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
                <Button onClick={() => handleOpenDialog("fm")}>
                  <img
                    alt=""
                    src={`${assetUrl}/images/ma.png`}
                    style={{ margin: "50px auto 0 auto", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
                  />
                </Button>
              </Grid>
            </>
          : <>
              <Grid item xs={12} sm={5}>
                <Button onClick={() => handleOpenDialog("fm")}>
                  <img
                    alt=""
                    src={`${assetUrl}/images/ma.png`}
                    style={{ margin: "50px auto 0 auto", width: "100%", height: "auto", maxWidth: "250px", display: "block"}}
                  />
                </Button>
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
      <Dialog
        fullWidth={true}
        maxWidth={isWidthUp("sm", width) ? "md" : "xl"}
        open={openEMF}
        onClose={handleCloseDialog}
        scroll="paper"
      >
        <DialogContent>
          {emfList.map(e =>
            <img
              alt=""
              src={`${assetUrl}/images/${e}.png`}
              style={{marginTop: "25px" ,marginBottom: "25px", width: "100%", height: "auto"}}
            />
            )
          }
        </DialogContent>
      </Dialog>
      <Dialog
        fullWidth={true}
        maxWidth={isWidthUp("sm", width) ? "md" : "xl"}
        open={openFM}
        onClose={handleCloseDialog}
        scroll="paper"
      >
        <DialogContent>
          {fmList.map(e =>
            <img
              alt=""
              src={`${assetUrl}/images/${e}.png`}
              style={{marginTop: "25px" ,marginBottom: "25px", width: "100%", height: "auto"}}
            />
            )
          }
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default withWidth()(withStyles(styles)(Work))
