import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Login from "./Screens/Authentication/loginScreen";
import Footer from "./Screens/Footer/footer";
import NewsFeed from "./Screens/NewsFeed/newsFeed";
import UserProfile from "./Screens/UserProfile/userProfile";
import "./App.css";
import { useState } from "react";
import SignUp from "./Screens/Authentication/signUp";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [auth, isAuth] = useState(false);
  return (
    <div className={!auth ? "app" : "app app__auth"}>
      <HashRouter>
        <Switch>
          <Route
            path="/user"
            component={() => {
              isAuth(false);
              return <UserProfile />;
            }}
          />
          <Route
            path="/login"
            component={() => {
              isAuth(true);
              return <Login />;
            }}
          />
          <Route
            path="/signUp"
            component={() => {
              isAuth(true);
              return <SignUp />;
            }}
          />
          <Route
            path="/"
            component={() => {
              isAuth(false);
              return <NewsFeed />;
            }}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
