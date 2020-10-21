import React, { useState } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

// import Footer from "./Screens/Footer/footer";
import Login from "./Screens/Authentication/loginScreen";
import NewsFeed from "./Screens/NewsFeed/newsFeed";
import UserProfile from "./Screens/UserProfile/userProfile";
import SignUp from "./Screens/Authentication/signUpScreen";
import NotFound404 from "./Screens/NotFound404/notFound404";

import { Provider } from "react-redux";
import { newStore } from "./Redux/store";
import { setTokenHeader } from "./Services/apiService";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = newStore();

function App() {
  if (localStorage.token) {
    setTokenHeader(localStorage.token);
  }

  const [page, setPage] = useState("");
  return (
    <div
      className={`${page === "404" ? "notFound" : "app"} ${
        page === "auth" ? "app__auth" : ""
      }`}
    >
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/user/:userName"
              component={(props) => {
                setPage("profile");
                return <UserProfile {...props} />;
              }}
            />
            <Route
              exact
              path="/login"
              component={(props) => {
                setPage("auth");
                return <Login {...props} />;
              }}
            />
            <Route
              exact
              path="/signUp"
              component={(props) => {
                setPage("auth");
                return <SignUp {...props} />;
              }}
            />
            <Route
              exact
              path="/"
              component={(props) => {
                setPage("feed");
                return <NewsFeed {...props} />;
              }}
            />
            <Route
              path="/"
              component={(props) => {
                setPage("404");
                return <NotFound404 {...props} />;
              }}
            />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
