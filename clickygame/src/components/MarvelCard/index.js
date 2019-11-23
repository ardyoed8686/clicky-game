import React from "react";
import "./style.css";

const marvelCard = (props) => {
  return (
    
      <div className="card" onClick={() => props.handleClick(props.id)}>
          <img alt={props.name} src={props.image} />
      </div>
  
  );
}

export default MarvelCard;
