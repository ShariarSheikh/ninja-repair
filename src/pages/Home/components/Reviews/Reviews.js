import React, { useState } from "react";
import "./Reviews.css";
import { Carousel } from "react-bootstrap";


const Reviews = (props) => {
  const totalReview = props.review
  return (
    <section className="reviews">
      <div className="title">
        <h2>Reviews</h2>
      </div>

      <div className="reviews_carousel_container">
        <Carousel>
          {
            totalReview.map((review)=>(
                <Carousel.Item interval={5000}>
            <div className="item">
              <img
                className="reviews_person_img"
                src={review.img}
                alt={review.name}
              />
              <h1 className="person_name">{review.name}</h1>
              <h6>{review.title}</h6>
              <div>
                <p className="person_title">
                 {review.description}
                </p>
              </div>
            </div>
          </Carousel.Item>
            ))
          }
        
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
