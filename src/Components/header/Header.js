import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import HeaderOption from "./HeaderOption";
import WorkIcon from "@material-ui/icons/Work";
import PeopleIcon from "@material-ui/icons/People";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

function Header() {
  return (
    <div className="Header">
      {/* left part */}
      <div className="header_left">
        <img src="/Assets/linkediin.png" alt="satyas" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {/* right part */}
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={InsertCommentIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption Icon={AccountCircleIcon} title="Me" />
        <DragIndicatorIcon />
        <p>
          <a
            href="Try Premium Month Free for 1 Month"
            className="Header_premium"
          >
            Try Premium Month Free for 1 Month
          </a>
        </p>
      </div>
    </div>
  );
}

export default Header;
