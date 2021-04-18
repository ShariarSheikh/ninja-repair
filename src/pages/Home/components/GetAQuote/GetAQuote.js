import { Grid } from "@material-ui/core";
import React from "react";
import "./GetAQuote.css";

const GetAQuote = () => {
  return (
    <div className="getAQuote">
      <div className="get_a_quote_container">
        <div item className="left">
          <h3>Multi Brand</h3>
          <h1>Repair & Services</h1>
          <p>
            Life without our Pc’s, laptops & printers is just unimaginable! So
            if these are ailing with hardware or software issues and you are
            wondering who will fix my PC instantly Our certified experts will
            resolve them all. From computer repair services, laptop repair
            services to printer repair services Our expert shall detect all
            concerns and accomplish everything from software installation to
            motherboard repair.
          </p>
        </div>
        <div  item className="right">
            <div className="form_div">
                <button className="get_a_quote_btn">Get a FREE Quote</button>
                <input type="text" placeholder="Your Name(Required)" required/>
                <input type="email" placeholder="Your Email(Required)" required/>
                <textarea name="message" cols="20" rows="5" placeholder="Give Some Details"></textarea>
                <button className="get_quote_btn">GET A Quote</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
