import React from "react";
import "./MediumCard.css";
function MediumCard({ img, title }) {
  return (
    <div className="medium_cards">
      <div className="medium_card_image">
        <img src={img} alt=""></img>
      </div>
      <div className="medium_card_text">
        <h3 className="medium_card_text_title">{title}</h3>
      </div>
    </div>
  );
}

export default MediumCard;
