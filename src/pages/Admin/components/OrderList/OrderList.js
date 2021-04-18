import React, { useEffect, useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  orderlistRoot: {
    height: "80vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  orderlistContainer: {
    width: "80%",
  },
  table: {
    minWidth: 650,
  },
  
});

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    fetch(`https://infinite-dusk-63646.herokuapp.com/bookinglist`)
      .then((res) => res.json())
      .then((data) => setOrderList(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(orderList);
  const classes = useStyles();
  return (
    <Grid container className={classes.orderlistRoot}>
      <Grid container className={classes.orderlistContainer}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead style={{backgroundColor:"#2196f3"}}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Email ID</TableCell>
                <TableCell align="left">Service</TableCell>
                <TableCell align="left">Pay With</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* table row start */}
                {
                  orderList.map(order=> (
                    <TableRow key={order._id}>
                    <TableCell component="th" scope="row">
                      {order.displayName}
                    </TableCell>
                    <TableCell align="left">{order.email}</TableCell>
                    <TableCell align="left">{order.title}</TableCell>
                    <TableCell align="left">Stripe</TableCell>
                    <TableCell align="left">
                      <select id="cars">
                        <option value="Done">Done</option>
                        <option value="Pending">Pending</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Done" selected>
                          Done
                        </option>
                      </select>
                    </TableCell>
                  </TableRow>
                  ))
                }
              {/* table row end */}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default OrderList;
