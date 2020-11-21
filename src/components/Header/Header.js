import React from "react";
import { constants } from "../../helpers/Constants";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <span>{constants.header_menu_one}</span>
      <span>{constants.header_menu_bracket}</span>
      <span>{constants.header_menu_two}</span>
    </div>
  );
};

export default Header;
