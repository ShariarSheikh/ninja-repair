import React from "react";
import "./Blog.css";

//icons import from react icons
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

const Blog = () => {
  const blogItems = (img, title, description) => {
    return (
      <div className="blog_items">
        <img src={img} alt="service" />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="blog_info_container">
          <div>
            <p>
              <AiOutlineCalendar className="blog_info_icon" /> Dec 9, 2021
            </p>
            <p>
              <BsPencilSquare className="blog_info_icon2" /> Shariar
            </p>
          </div>
          <div>
            <h4>READ MORE</h4>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="blog">
      <div className="blog_title">
        <h2>OUR NEWS</h2>
      </div>
      <div className="blog_items_container">
        {blogItems(
          "https://images.unsplash.com/photo-1566728595333-75a1d7cae961?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlJTIwcmVwYWlyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          "HOW TO CHOOSE HEADPHONES FOR YOUR SMARTPHONE",
          "Praesent sit amet erat ornare, sodales risus quis, tempus risus. Sed leo enim, pharetra vestibulum metus lobortis, ultricies efficitur eros."
        )}
        {blogItems(
          "https://images.unsplash.com/photo-1566728595333-75a1d7cae961?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlJTIwcmVwYWlyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          "HOW TO CHOOSE HEADPHONES FOR YOUR SMARTPHONE",
          "Praesent sit amet erat ornare, sodales risus quis, tempus risus. Sed leo enim, pharetra vestibulum metus lobortis, ultricies efficitur eros."
        )}
        {blogItems(
          "https://images.unsplash.com/photo-1566728595333-75a1d7cae961?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlJTIwcmVwYWlyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          "HOW TO CHOOSE HEADPHONES FOR YOUR SMARTPHONE",
          "Praesent sit amet erat ornare, sodales risus quis, tempus risus. Sed leo enim, pharetra vestibulum metus lobortis, ultricies efficitur eros."
        )}
         {blogItems(
          "https://images.unsplash.com/photo-1566728595333-75a1d7cae961?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlJTIwcmVwYWlyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
          "HOW TO CHOOSE HEADPHONES FOR YOUR SMARTPHONE",
          "Praesent sit amet erat ornare, sodales risus quis, tempus risus. Sed leo enim, pharetra vestibulum metus lobortis, ultricies efficitur eros."
        )}
      </div>
    </div>
  );
};

export default Blog;
