import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "./components/Book/Book";
import BookingList from "./components/BookingList/BookingList";
import MakeReview from "./components/MakeReview/MakeReview";
import "./Services.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#051154",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    justifyContent: "space-evenly",
    cursor: "pointer",
    color: "#d35717",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  ul: {
    padding: "0px",
  },
  sidebarBtn: {
    backgroundColor: "#5f6aa040;",
  },
}));

const Services = () => {
  const classes = useStyles();

  const Sidebar = () => {
    const classes = useStyles();
    return (
      <>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Link to="/">
            <div className={classes.toolbar}>
              <img src={logo} width="40px" alt="logo" />
              <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                Ninja Repair
              </Typography>
            </div>
          </Link>
          <Divider />
          <Link to="/services/book/:id">
            <List className={classes.ul}>
              <ListItem button className={classes.sidebarBtn}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"Book"} />
              </ListItem>
            </List>
          </Link>
          <Link to="/services/bookinglist">
            <List className={classes.ul}>
              <ListItem button className={classes.sidebarBtn}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"BookIng List"} />
              </ListItem>
            </List>
          </Link>
          <Link to="/services/makereview">
            <List className={classes.ul}>
              <ListItem button className={classes.sidebarBtn}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"Review"} />
              </ListItem>
            </List>
          </Link>
        </Drawer>
      </>
    );
  };
  return (
    <div className={classes.root}>
      {<Sidebar />}
      <main className={classes.content}>
        <Grid container>
          <Switch>
            <Route path="/services/book/:id">
              <Book />
            </Route>
            <Route path="/services/bookinglist">
              <BookingList />
            </Route>
            <Route path="/services/makereview">
              <MakeReview />
            </Route>
          </Switch>
        </Grid>
      </main>
    </div>
  );
};

export default Services;
