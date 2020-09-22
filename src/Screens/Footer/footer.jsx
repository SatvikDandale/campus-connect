import { AccountCircle, Home, Message, Search } from "@material-ui/icons";
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <Home />
        <Search />
        <Message />
        <AccountCircle />
      </div>
    </div>
  );
};

export default Footer;
