import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    marginTop: "50px",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  footerUl: {
    listStyle: "none",
    marginBottom: "50px",
    padding: "0",
  },
  footerLastText: {
    marginBottom: "20px",
    color: "#1c54a4",
  },
  footerLi: {
    marginBottom: "10px",
    color: "gray",
    textAlign: "start",
  },
  footerItem: {
    //  marginRight:"60px",
    // border:"1px solid lightgray"
  },
  footerComponent_container: {
    width: "80%",
    margin: "0 auto",
    marginTop: "30px",
    marginBottom: "20px",
  },
  categoryTitle_footer: {
    textAlign: "start",
    color: "white",
    marginBottom:'20px'
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid
        container
        justify="center"
        className={classes.footerComponent_container}
      >
        <Grid
          item
          className={classes.footerItem}
          xs={6}
          sm={4}
          md={3}
          lg={3}
          xl={3}
        >
          <Typography
            variant="subtitle1"
            className={classes.categoryTitle_footer}
          >
            Category
          </Typography>
          <ul className={classes.footerUl}>
            <li className={classes.footerLi}>Mobile</li>
            <li className={classes.footerLi}>Laptop</li>
            <li className={classes.footerLi}>Compute</li>
            <li className={classes.footerLi}>Monitor</li>
          </ul>
        </Grid>
        <Grid
          item
          className={classes.footerItem}
          xs={6}
          sm={4}
          md={3}
          lg={3}
          xl={3}
        >
          <Typography
            variant="subtitle1"
            className={classes.categoryTitle_footer}
          >
            Oral Health
          </Typography>
          <ul className={classes.footerUl}>
            <li className={classes.footerLi}>Emergency Dental Care</li>
            <li className={classes.footerLi}>Check Up</li>
            <li className={classes.footerLi}>Treatment of Personal Diseases</li>
            <li className={classes.footerLi}>Tooth Extraction</li>
            <li className={classes.footerLi}>Check Up</li>
          </ul>
        </Grid>
        <Grid
          item
          className={classes.footerItem}
          xs={12}
          sm={4}
          md={3}
          lg={3}
          xl={3}
        >
          <Typography
            variant="subtitle1"
            className={classes.categoryTitle_footer}
          >
            Location
          </Typography>
          <ul className={classes.footerUl}>
            <li className={classes.footerLi}>Bangladesh , Dhaka</li>
            <li className={classes.footerLi}>Kishoreganj , Bhairab</li>
            <ul className={classes.footerUl}>
            <li className={classes.footerLi}> <span className={classes.categoryTitle_footer}>Cookies & Privacy</span> </li>
            <li className={classes.footerLi}>alfjsaldjfljfl</li>
          </ul>
          </ul>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        color="initial"
        className={classes.footerLastText}
      >
        Copyright 2021 All Rights Reserved
      </Typography>
    </Grid>
  );
};

export default Footer;
