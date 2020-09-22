import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Screens/Footer/footer";
import NavBar from "./Screens/NavBar/navBar";
import NewsFeed from "./Screens/NewsFeed/newsFeed";
import UserProfile from "./Screens/UserProfile/userProfile";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <NavBar />

        <Switch>
          <Route path="/user" component={UserProfile} />
          <Route path="/" component={NewsFeed} />
        </Switch>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
