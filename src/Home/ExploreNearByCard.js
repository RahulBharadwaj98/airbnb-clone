import React from "react";
import "./ExploreNearby.css";

function ExploreNearByCard({ img, title, description }) {
  return (
    <div>
      <div className="discover_card_image">
        <img src={img} alt=""></img>
        <h3 className="discover_title">{title}</h3>
        <p className="discover_desc">{description}</p>
      </div>
    </div>
  );
}

export default ExploreNearByCard;
