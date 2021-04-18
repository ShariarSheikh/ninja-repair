import { Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import "./MakeReview.css";
import {AuthContext} from '../../../../AuthContext/AuthContext'

const MakeReview = () => {
  const [name,setName] = useState("");
  const [title,setTitle] = useState("");
  const [message,setMessage] = useState("")
  const [auth,setAuth] = useContext(AuthContext)

  const handleSubmit=(e)=>{
    e.preventDefault();
    const review = {
      name:name,
      title:title,
      description:message,
      img:auth.photoURL
    }
    const url = 'https://infinite-dusk-63646.herokuapp.com/reviews'
    fetch(url,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  return (
    <div className="reviewMake">
      <dvi className="form_container">
        <Typography variant="h4" style={{ marginBottom: "20px" }}>
          What would you like to share with us?
        </Typography>
        <form className="review_make_form" onSubmit={handleSubmit}>
          <input
            className="review_making_input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="review_making_input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            email="title"
            placeholder="What you do?"
            required
          />
          <textarea
            className="review_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            cols="30"
            rows="5"
            placeholder="Your thought"
            required
          ></textarea>
          <button className="review_send_btn" type="submit">Send</button>
        </form>
      </dvi>
    </div>
  );
};

export default MakeReview;
