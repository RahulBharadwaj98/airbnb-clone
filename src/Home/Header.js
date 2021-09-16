import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/* left */}
      <div className="header_left">
        <Link to="/">
          <img
            className="header_icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
          />
        </Link>
      </div>
      {/* center */}
      <div className="header_center">
        <input
          className="header_center_input"
          type="text"
          placeholder="Start your search"></input>
        <SearchIcon className="header_center_input_icon" />
      </div>
      {/* right */}
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon className="header_right_language_icon" />
        <div className="header_right_profile">
          <Menu className="header_right_menu" />
          <Avatar className="header_right_avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
