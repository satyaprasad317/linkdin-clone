import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title }) {
  return (
    <div className="HeaderOption">
      {Icon && <Icon className="headerOption_Icon" />}
      {<h3 className="HeaderOption_title">{title}</h3>}
    </div>
  );
}

export default HeaderOption;
