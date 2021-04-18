import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import firebase from "firebase/app";
import "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router";
import { firebaseConfig } from "../../firebase.config";
import { AuthContext } from "./../../AuthContext/AuthContext";
import { Typography } from "@material-ui/core";
import logo from './../../images/logo.svg'

const useStyles = makeStyles((theme) => ({
  loginRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height:"50vh",
  },
  continueWithBtn: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    borderRadius: "20px",
    marginBottom: "40px",

  },
  formContainer: {
    width: "450px",
    borderRadius: "20px",
    border: "0.1px solid lightgray",
    padding:"40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"50px"
  },
  loginTitle:{
    width: "100%",
    display: "flex",
    justifyContent: "center",
  textAlign: "center",
  marginTop:"50px",
  marginBottom:"20px"
  }
}));

//firebase auth
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  const [auth, setAuth] = useContext(AuthContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // sign in google auth provider
  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(GoogleAuthProvider)
      .then((result) => {
        const user = result.user;
        const { displayName, email,photoURL } = user;
        const signedUser = { displayName, email, photoURL };
        setAuth(signedUser);
        storeAuthToken();
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
      });
  };

const storeAuthToken = () =>{
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  .then(idToken=>{
    // console.log(idToken);
    sessionStorage.setItem('token',idToken);
  })
  .catch(function(error) {
    // Handle error
  });
}

  const classes = useStyles();
  return (
    <Grid container className={classes.loginRoot}>
      <Grid container className={classes.formContainer}>
        <Typography variant="h5"color="secondary">
          <img width="50px" src={logo} alt=""/>
          Ninja Repair
        </Typography>
        <Grid container className={classes.loginTitle}>
          <Typography variant="h5" color="primary">
            LogIn With
          </Typography>
        </Grid>
        <Button
          className={classes.continueWithBtn}
          variant="outlined"
          onClick={signIn}
        >
          <FcGoogle /> Continue With Google
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
