import React from "react";
import "./style.css";
const styles = {
    header: {
        backgroundImage: 'url("/colorful-confetti-over-dark-background-confetti.jpg")'
    }
    
}

const Header = (props) => {
    return (
        <div main="container header" style={styles.navBrand}>
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            {props.children}
        </div>
    )
}

export default Header;