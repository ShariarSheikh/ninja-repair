import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  makeAdminRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  adminContainer: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    height: "50vh",
    flexDirection: "column",
    alignItems: "center",
  },
  makeAdminStyle: {
    padding: "10px",
    borderRadius: "5px",
    display:"flex",
    flexDirection: "column",
    width:"450px",
    minWidth: "250px",
    backgroundColor: "white",
  },
  gmailInput:{
      padding:"10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border:"0.1px solid whitesmoke",
  },
  submitBtn: {
      marginBottom:"20px",
      padding: "10px",
      border: "transparent",
      borderRadius: "5px",
      color: "white",
      backgroundColor: "black",
      outlineColor:"white"
  }
});

const MakeAdmin = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.makeAdminRoot}>
      <Grid container className={classes.adminContainer}>
        <Typography variant="h5">Make Admin</Typography>
        <Grid item className={classes.makeAdminStyle}>
            <input type="text" placeholder="@gmail.com" className={classes.gmailInput}/>
            <button className={classes.submitBtn}>Submit</button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MakeAdmin;
