import React from "react";
import "./Header.css";

const Header = props => (
    <div className={props.className}>
        <h2>Current Kitties Klicked: {props.score}</h2>
        <h2>Most Kitties Klicked: {props.highScore}</h2>
    </div>
);

export default Header;