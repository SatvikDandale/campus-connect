import React from "react";
import { AccountCircle, Explore, Home, PowerSettingsNew, Search } from "@material-ui/icons";
import "./navBar.css";
import SearchModal from "./searchModal";

const NavBar = (props) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="navbar__notBootstrap">
      <p className="navbar__heading" onClick={() => props.history.push("/")}>Campus Connect</p>
      <div className="navbar__search">
        <button onClick={() => setShow(true)}>Search</button>
        <Search />
      </div>
      <SearchModal show={show} handleClose={() => setShow(false)} {...props}/>
      <div className="navbar__icons">
        <Home onClick={() => props.history.push("/")} />
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
