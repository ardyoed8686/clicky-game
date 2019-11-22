import React from "react";
import "./style.css";

const Header = (props) => {
    return (
        <div main="container header">
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            {props.children}
        </div>
    )
}

export default Header;