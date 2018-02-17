import React, { Component } from "react";
import logo from "../img/logo.svg";
import "../App.css";


class Header extends Component {
  render() {


    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </header>

    );
  }
}

export default Header;
