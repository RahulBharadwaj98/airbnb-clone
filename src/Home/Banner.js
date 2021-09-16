import React from "react";
import "./Banner.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

function Banner() {
  const history = useHistory();
  return (
    <div className="banner">
      <p className="banner_text">Not sure where to go? Perfect.</p>
      <Button
        onClick={() => history.push("/search")}
        variant="contained"
        disableRipple="true">
        I'm flexible
      </Button>
    </div>
  );
}

export default Banner;
