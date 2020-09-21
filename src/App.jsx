import React from "react";
import "./App.css";
import NavBar from "./Screens/NavBar/navBar";
import NewsFeed from "./Screens/NewsFeed/newsFeed";

function App() {
  return (
    <div className="app">
      <NavBar />

      <NewsFeed />
    </div>
  );
}

export default App;
