import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import  Grid  from "@material-ui/core/Grid";
import {motion} from 'framer-motion'

const Services = (props) => {
  const services = props.service
  return (
    <div className="services">
      <div className="services_header_container">
        <h2>Our Services</h2>
        <p>
          We are one of the best laptop repairing service provider <br />
          company in Bangladesh and repair your <br /> system at your
          home/office at very cheapest price
        </p>
      </div>
      <div className="services_items_container">
           {services.map((service)=> (
            <div key={service._id} className="service_card">
            <motion.img whileHover={{ scale:1.1}} src={service.img} alt="service" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Grid container>
              <h6 style={{color:"blue"}}> Price:$ <strong>{service.price}</strong> </h6>
            </Grid>
            <Link to={`/services/book/${service._id}`}>
            <button>Learn More</button>
            </Link>
          </div>
           ) )}
      </div>
    </div>
  );
};

export default Services;
