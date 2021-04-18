import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  manageServicesRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  manageItemContainer: {
    width: "80%",
    minHeight: "50vh",
    display: "flex",
    justifyContent: "flex-start",
    padding:" 10px",
    backgroundColor: "#f3f3f3"
  },
  manageItem: {
    minWidth: "350px",
    width: "380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginRight:"20px",
    marginBottom:'20px',
    textAlign: "start",
    padding:"10px",
    borderRadius: "5px",
    backgroundColor:"white"
  },
  manageItemImg: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    marginBottom:"10px"
  },
});
const ManageServices = () => {
const [ services,setServices]  = useState([])


//delete Services
const deleteServices = (id) =>{
  fetch(`https://infinite-dusk-63646.herokuapp.com/services/${id}`,{
    method: 'DELETE',
    headers: {'Accept': 'application/json',
      'Content-Type': 'application/json'
}
  })
  
    }
    
   //for services 
 useEffect(()=>{
  fetch('https://infinite-dusk-63646.herokuapp.com/services')
  .then(res=> res.json())
  .then(service => setServices(service))
  .catch(err => console.log(err))
},[])




  const classes = useStyles();
  return (
    <Grid container className={classes.manageServicesRoot}>
      <Grid container className={classes.manageItemContainer}>
          {/* manage item start */}
          {
            services.map(service =>(
              <Grid item className={classes.manageItem}>
          <img
            className={classes.manageItemImg}
            src={service.img}
            alt="services"
          />
          <Typography variant="h5" style={{marginBottom:"10px"}}>{service.title}</Typography>
          <Typography variant="body2">
            {service.description}
          </Typography>
          <Button variant="contained" color="secondary" size="small" style={{marginTop:"10px"}} onClick={()=> deleteServices(service._id)}>
            Delete Service
          </Button>
        </Grid>
            ))
          }
        
          {/* manage item end */}
      </Grid>
    </Grid>
  );
};

export default ManageServices;
