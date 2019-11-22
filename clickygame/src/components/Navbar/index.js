import React from "react";

const styles = {
  navbar: {
      backgroundColor: "#5900b3",
      color: "#fff",
      fontFamily: "sans-serif",
      padding: "10px",
      justifyContent: "space-evenly"
    },
    
  navBrand: {
      fontSize: "30px",
      fontWeight: 900,
      width: "33.3%"
    },
    
  clickGuess: {
      
      marginLeft: "35%",
    },
    
  score: {
      width: "33.3%",
      marginLeft: "67%",
    }
};

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-purple" style={styles.navbar}>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-brand" style={styles.navBrand} ><a className="brand" href="/">Clicky Game</a></li>
      <li className="click-guess" style={styles.clickGuess}> {props.guess}</li>
      <li className="score" style={styles.score}>Score: {props.playerScore} | Top Score: {props.topScore}</li>
    </ul>
  </div>
</nav>
  )

}

export default Navbar;