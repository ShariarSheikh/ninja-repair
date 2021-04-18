import { Grid, makeStyles, Typography} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import "./Book.css";
import ProcessPayment from "../../../../components/ProcessPayment/ProcessPayment";
import { useParams } from "react-router";
import {AuthContext} from '../../../../AuthContext/AuthContext'

const useStyles = makeStyles({
  bookRoot: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  showPaymentContainer: {
    display: "flex",
    width: "90%",
    margin:"0 auto",
    justifyContent: "center",
    height: "50px",
    padding: "10px",
    backgroundColor:"#2196f3",
    borderRadius: "5px",
    marginTop:"10px",
  }
});

const Book = () => {
 const [singleService,setSingleService] = useState({})
 const [auth,setAuth] = useContext(AuthContext )
  const {id} = useParams()
useEffect(()=>{
   const url = `https://infinite-dusk-63646.herokuapp.com/services/${id}`
   fetch(url)
   .then(res => res.json())
   .then(data => setSingleService(data[0]) )
   .catch(err => console.log(err))
  },[])
  
 const {title,img,description,price}  = singleService

  console.log(auth.photoURL);
  const classes = useStyles();

const handleBookedService=()=>{
  const bookedService = { 
     img:img,
     photoURL:auth.photoURL,
     email:auth.email,
     displayName:auth.displayName,
     title:title,
     description:description,
     price:price,
  }

  const url = "https://infinite-dusk-63646.herokuapp.com/bookinglist";
  fetch(url,{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(bookedService)
  }).then(res=>console.log(res))
}

  return (
    <div className="book">
      <div className="book_container">
        <div className="book_left_container">
            <h2>Book</h2>
            <div className="selected_item">
                <img  className="selected_item_img" src={img} alt="item"/>
                <h4>{title}</h4> 
                <p>{description}</p>
            </div>
        </div>
        <div className="book_right_container">
            <h2>PaymentMethod</h2>
            <div className="payment_container">
              <ProcessPayment handleBookedService={handleBookedService} />
              <Grid container className={classes.showPaymentContainer}>
              <Typography variant="subtitle1" style={{color:"white"}}>Your Service change will be  $<strong style={{color:"white"}}>{price}</strong> </Typography>
              </Grid>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
