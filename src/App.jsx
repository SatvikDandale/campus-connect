import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Login from "./Screens/Authentication/loginScreen";
// import Footer from "./Screens/Footer/footer";
import NewsFeed from "./Screens/NewsFeed/newsFeed";
import UserProfile from "./Screens/UserProfile/userProfile";
import "./App.css";
import { useState } from "react";
import SignUp from "./Screens/Authentication/signUpScreen";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { newStore } from "./Redux/store";
import { setTokenHeader } from "./Services/apiService";

const store = newStore();

function App() {
  if (localStorage.token) {
    setTokenHeader(localStorage.token);
  }

  const [auth, isAuth] = useState(false);
  return (
    <div className={!auth ? "app" : "app app__auth"}>
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/user"
              component={(props) => {
                isAuth(false);
                return <UserProfile {...props} />;
              }}
            />
            <Route
              exact
              path="/login"
              component={(props) => {
                isAuth(true);
                return <Login {...props} />;
              }}
            />
            <Route
              exact
              path="/signUp"
              component={(props) => {
                isAuth(true);
                return <SignUp {...props} />;
              }}
            />
            <Route
              exact
              path="/"
              component={(props) => {
                isAuth(false);
                return <NewsFeed {...props} />;
              }}
            />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
