import { AccountCircle, Explore, Home, PowerSettingsNew, Search } from "@material-ui/icons";
import React from "react";
import "./navBar.css";

const NavBar = (props) => {
  return (
    <div className="navbar__notBootstrap">
      <p className="navbar__heading">Campus Connect</p>
      <div className="navbar__search">
        <input placeholder="Search"></input>
        <Search />
      </div>
      <div className="navbar__icons">
        <Home onClick={() => props.history.push("/")} />
        <Explore />
        <PowerSettingsNew
          onClick={() => {
            localStorage.clear();
            props.history.push("/login");
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
