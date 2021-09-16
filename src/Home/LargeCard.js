import { Button } from "@material-ui/core";
import React from "react";
import "./LargeCard.css";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="large_card_section">
      <div className="large_card_image">
        <img src={img} alt=""></img>
      </div>
      <div className="card_elements">
        <h1 className="card_element_title">{title}</h1>
        <p className="card_element_description">{description}</p>
        <Button className="card_element_button" disableRipple="true">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}

export default LargeCard;
