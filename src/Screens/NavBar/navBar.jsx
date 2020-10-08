import { AccountCircle, Explore, Home, Search } from "@material-ui/icons";
import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navbar__notBootstrap">
      <p className="navbar__heading">Campus Connect</p>
      <div className="navbar__search">
        <input placeholder="Search"></input>
        <Search />
      </div>
      <div className="navbar__icons">
        <Home />
        <Explore />
        <AccountCircle />
      </div>
    </div>
  );
};

export default NavBar;
