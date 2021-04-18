import React from "react";
import "./PricingTable.css";
const PricingTable = () => {
  const pricingTableItem = (title, description, price) => {
    return <div className="items">Basic</div>;
  };

  return (
    <div className="pricingTable">
      <div className="pricingTable_container">
        <div className="pricingTable_title_container">
          <h2>
            Pricing <span style={{ color: "orange" }}>Table</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem{" "}
            <br />
            voluptatem obcaecati!
          </p>
        </div>
        <div className="pricingTable_items">
          {/* items starts */}
          <div className="items">
            <div className="top_div">
              <h2>Basic Services</h2>
              <p>Sample Title Here</p>
            </div>
            <div className="pricing_div">
              $120 <small>/month</small>
            </div>
            <ul>
              <li>2 Computer Repair</li>
              <li>1 Laptop Repair</li>
              <li>1 Phone Repair</li>
              <li>Free Supports</li>
            </ul>
            <button>SIGNUP</button>
          </div>
          {/* items end */}
          {/* items starts */}
          <div className="items">
            <div className="top_div">
              <h2>Basic Services</h2>
              <p>Sample Title Here</p>
            </div>
            <div className="pricing_div">
              $120 <small>/month</small>
            </div>
            <ul>
              <li>2 Computer Repair</li>
              <li>1 Laptop Repair</li>
              <li>1 Phone Repair</li>
              <li>Free Supports</li>
            </ul>
            <button>SIGNUP</button>
          </div>
          {/* items end */}
          {/* items starts */}
          <div className="items">
            <div className="top_div">
              <h2>Basic Services</h2>
              <p>Sample Title Here</p>
            </div>
            <div className="pricing_div">
              $120 <small>/month</small>
            </div>
            <ul>
              <li>2 Computer Repair</li>
              <li>1 Laptop Repair</li>
              <li>1 Phone Repair</li>
              <li>Free Supports</li>
            </ul>
            <button>SIGNUP</button>
          </div>
          {/* items end */}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
