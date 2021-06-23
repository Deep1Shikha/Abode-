import bg from "../img/back.jpg"
import couple from "../img/story-1.jpeg"
import coupleHouse from "../img/story-2.jpeg"


export default function StoryPictures() {
    return(
        <>
       <div className="story__pictures">
          <img src={couple} alt="Couple with new house" className="story__img-1" />
          <img src={coupleHouse} alt="New House" className="story__img-2" />
         </div>
       </>
    );
  }