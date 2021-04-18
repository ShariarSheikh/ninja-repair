import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthContext/AuthContext";
import "./BookingList.css";



const BookingItems = (props) => {
  const { img, title, description } = props.data;
  return (
    <div className="services_item">
      <img src={img} alt="item" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <h5 className="item_pending">Pending</h5>
      </div>
    </div>
  );
};

const BookingList = () => {
  const [bookingList, setBookingList] = useState([]);
  const [auth,setAuth] = useContext(AuthContext)
 useEffect(()=>{
  fetch(`https://infinite-dusk-63646.herokuapp.com/bookinglist?email=${auth.email}`)
  .then(res => res.json())
  .then(data => setBookingList(data))
 },[])

  return (
    <div className="bookingList">
      <div className="booking_list_container">
        <div className="booking_list_top">
          <h3>BookingList</h3>
          <button>Refresh</button>
        </div>
        <div className="booking_list_bottom">
          {bookingList.map((list) => (
            <BookingItems data={list} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingList;
