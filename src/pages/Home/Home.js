import React, { useEffect, useState } from "react";
import Blog from "./components/Blog/Blog";
import GetAQuote from "./components/GetAQuote/GetAQuote";
import HeaderSlider from "./components/HeaderSlider/HeaderSlider";
import PricingTable from "./components/PricingTable/PricingTable";
import Reviews from "./components/Reviews/Reviews";
import Services from './components/Services/Services'
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import "./Home.css";

const Home = () => {
 const [loadService,setLoadService] = useState([])
 const [reviews,setReviews] = useState([])

 //for services 
 useEffect(()=>{
   fetch('https://infinite-dusk-63646.herokuapp.com/services')
   .then(res=> res.json())
   .then(service => setLoadService(service))
   .catch(err => console.log(err))
 },[])

 //for reviews
 useEffect(()=>{
  fetch('https://infinite-dusk-63646.herokuapp.com/reviews')
  .then(res=> res.json())
  .then(review => setReviews(review))
  .catch(err => console.log(err))
},[])

  return (
    <div className="home">
      <HeaderSlider />
      <WhoWeAre/>
      <Services service={loadService}/>
      <PricingTable/>
      <Reviews review={reviews}/>
      <Blog/>
      <GetAQuote/>
    </div>
  );
};

export default Home;
