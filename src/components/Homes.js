import HomeCard from "./HomeCard";
import house1 from "../img/house-1.jpeg";
import house2 from "../img/house-2.jpeg";
import house3 from "../img/house-3.jpeg";
import house4 from "../img/house-4.jpeg";
import house5 from "../img/house-5.jpeg";
import house6 from "../img/house-6.jpeg";


export default function Homes() {
  return (
    <section className="homes">
      <HomeCard
        src={house1}
        alt={"House 1"}
        className={"home__img"}
        iconheart={"#icon-heart-full"}
        title={"Beautiful Cosy Home"}
      />
      <HomeCard
        src={house2}
        alt={"House 2"}
        className={"home__img"}
        iconheart={"#icon-heart-full"}
        title={"Modern Glass Villa"}
      />
      <HomeCard 
      src={house3}
      alt={"House 3"}
      className={"home__img"}
      iconheart={"#icon-heart-full"}
      title={"Cozy Country House"}
      />
      <HomeCard src={house4}
        alt={"House 4"}
        className={"home__img"}
        iconheart={"#icon-heart-full"}
        title={"Large Rustical Villa"}/>
      <HomeCard src={house5}
        alt={"House 5"}
        className={"home__img"}
        iconheart={"#icon-heart-full"}
        title={"Majestic Palace House"}/>
      <HomeCard src={house6}
        alt={"House 6"}
        className={"home__img"}
        iconheart={"#icon-heart-full"}
        title={"Modern Family Apartment"}/>
    </section>
  );
}
