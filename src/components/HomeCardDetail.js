import React from "react";
import sprite from "../img/sprite.svg";

function HomeCardDetail(props) {
  const { className, icon, text } = props;
  return (
    <div className={className}>
      <svg>
        <use href={sprite + icon} />
      </svg>
      <p>{text}</p>
      
    </div>
  );
}

export default HomeCardDetail;
