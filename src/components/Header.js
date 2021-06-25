import React from "react";
import '../styles/Header.css';
import logo from "../assets/UGoing_Logo.png";

function Header() {
    return (
        <div className="header">
        <img src={logo} alt="UGoing" class="logo"></img>
        <div class="header-right">
            <a href=""><b><u>Sign Up</u></b></a>
        </div>
    </div>
    )
}

export default Header;