import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="whoWeAre">
      <div className="whoWeAre_left">
        <div>
         <h2>Who We Are</h2>
        <p>
          Ninja Repair is an established Kishoreganj <br/> based company, specialised
          in Computer Repairs <br/> and Services, We repair out of warranty <br/> laptops
          and Computer.
        </p>
        <button>VIEW SERVICES</button> 
        </div>
        
      </div>
      <div className="whoWeAre_right">
        <div>
            <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHRlYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          alt="team work pic"
        />
        </div>
      
      </div>
    </div>
  );
};

export default WhoWeAre;
