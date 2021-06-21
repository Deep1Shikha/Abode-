import React from "react";
import sprite from "../img/sprite.svg";
import HomeCardDetail from "./HomeCardDetail";

function HomeCard(props) {
  const { src, alt, className, iconheart, title } = props;

  return (
    <div className="home">
      <img src={src} alt={alt} className={className} />
      <svg className="home__like">
        <use href={sprite + iconheart} />
      </svg>
      <h5 className="home__name">{title}</h5>
      <HomeCardDetail
        className={"home__location"}
        icon={"#icon-map-pin"}
        text={"USA"}
      />
      <HomeCardDetail
        className={"home__rooms"}
        icon={"#icon-profile-male"}
        text={"5 rooms"}
      />
      <HomeCardDetail
        className={"home__area"}
        icon={"#icon-expand"}
        text={"325 m"}
      />
      <HomeCardDetail
        className={"home__price"}
        icon={"#icon-key"}
        text={"$120"}
      />
      <button class="btn home__btn">Contact Relator</button>
    </div>
  );
}

export default HomeCard;
