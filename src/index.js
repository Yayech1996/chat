import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/Nav";
import GroupsList from "./components/GroupsList";
import FriendsList from "./components/FriendsList";
//import "./App.css";

ReactDOM.render(
  <div>
      <h1>Groups</h1>
      <Nav/>
      <GroupsList/>
      <FriendsList/>
  </div>,

  document.getElementById("root")
);