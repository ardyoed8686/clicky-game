import React from "react";
import "./style.css";

const FriendCard = (props) => {
  return (
    
      <div className="card">
          <img alt={props.name} src={props.image} />
  
        <span onClick={() => props.handleClick(props.id)} className="remove"></span>
      </div>
  
  );
}

export default FriendCard;
