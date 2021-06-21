import FeatureCard from "./FeatureCard";

export default function features() {
  return (
    <section className="features">
    
      <FeatureCard
        icon={"#icon-global"}
        title={"World's best luxury homes"}
        text={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
        }
      />
      <FeatureCard
        icon={"#icon-trophy"}
        title={"Only the best properties"}
        text={
          " Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia."
        }
      />
      <FeatureCard
        icon={"#icon-map-pin"}
        title={"All homes in top locations"}
        text={
          "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."
        }
      />
      <FeatureCard
        icon={"#icon-key"}
        title={"New home in one week"}
        text={
          " Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor si amet consectetur adipisicing elit."
        }
      />
      <FeatureCard
        icon={"#icon-presentation"}
        title={"Top 1% happy cutomers"}
        text={
          "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus."
        }
      />
      <FeatureCard
        icon={"#icon-lock"}
        title={"Secure payments on abode"}
        text={
          "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."
        }
      />
    </section>
  );
}
