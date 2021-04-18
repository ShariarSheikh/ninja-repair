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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderList from "./components/OrderList/OrderList";
import AddService from "./components/AddService/AddService";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import ManageServices from "./components/ManageServices/ManageServices";
import { Grid } from "@material-ui/core";
import logo from '../../images/logo.svg'

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
        <Link to="/admin/orderlist">
            <List className={classes.ul}>
              <ListItem button className={classes.sidebarBtn}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"Order List"} />
              </ListItem>
            </List>
          </Link>
          <Link to="/admin/addservice">
            <List className={classes.ul}>
              <ListItem button className={classes.sidebarBtn}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"Add Service"} />
              </ListItem>
            </List>
          </Link>
          <Link to="/admin/makeadmin">
            <List className={classes.ul}>
              <ListItem button className={classes.sidebarBtn}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"Make Admin"} />
              </ListItem>
            </List>
          </Link>
          <Link to="/admin/manageservices">
            <List className={classes.ul}>
              <ListItem button className={classes.sidebarBtn}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"Manage Services"} />
              </ListItem>
            </List>
          </Link>
      </Drawer>
    </>
  );
};

const Admin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {<Sidebar />}
      <main className={classes.content}>
        <Grid container>
          <Switch>
            <Route path="/admin/orderlist">
              <OrderList/>
            </Route>
            <Route path="/admin/addservice">
              <AddService/>
            </Route>
            <Route path="/admin/makeadmin">
              <MakeAdmin/>
            </Route>
            <Route path="/admin/manageservices">
              <ManageServices/>
            </Route>
          </Switch>
        </Grid>
      </main>
    </div>
  );
};

export default Admin;
