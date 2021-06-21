import sprite from "../img/sprite.svg";
import React from "react";

function FeatureCard(props) {
  const { icon, title, text } = props;
  return (
    <>
      <div className="feature">
          {console.log("rendered feature card")}
        <svg className="feature__icon">
          <use href={sprite + icon} />
        </svg>
        <h4 className="heading-4 heading-4--dark">{title}</h4>
        <p className="feature__text">{text}</p>
      </div>
    </>
  );
}

const MemoizedFaturedCard = React.memo(FeatureCard);
export default MemoizedFaturedCard;

//export default React.memo(FeatureCard)

//export 
