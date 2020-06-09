import React from "react";
import "./style.css";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="./pages/dashboard">
          My Dashboard
        </a>
        <a className="navbar-brand" href="./pages/userList">
          My List
        </a>
        <a className="navbar-brand" href="./pages/plantSearch">
          Plant Search
        </a>
        <a className="navbar-brand" href="./pages/login">
          Logout
        </a>
      </nav>
    );
  }
  
  export default Nav;