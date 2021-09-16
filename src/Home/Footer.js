import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_div">
      <div className="footer">
        <div className="about">
          <h5>ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Careers</p>
          <p>Founders' Letter</p>
        </div>
        <div>
          <div className="community">
            <h5>COMMUNITY</h5>
            <p>Diversity and Belonging</p>
            <p>Accessibility</p>
            <p>Airbnb Associates</p>
            <p>Guest Referrals</p>
            <p>Airbnb.org</p>
          </div>
        </div>
        <div>
          <div className="host">
            <h5>HOST</h5>
            <p>Host your home</p>
            <p>Host an online experience</p>
            <p>Host an experience</p>
            <p>Resource centre</p>
            <p>Community centre</p>
          </div>
        </div>
        <div>
          <div className="support">
            <h5>SUPPORT</h5>
            <p>Our Covid-19 Response</p>
            <p>Help Centre</p>
            <p>Cancellation Options</p>
            <p>Neighbourhood Support</p>
            <p>Trust and Safety</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
