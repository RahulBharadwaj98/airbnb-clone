import React from "react";
import "./SmallCard.css";

function SmallCard({ img, location, distance }) {
  return (
    <div className="small_cards">
      <div className="small_card_image">
        <img src={img} alt=""></img>
      </div>
      <div className="small_card_text">
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
