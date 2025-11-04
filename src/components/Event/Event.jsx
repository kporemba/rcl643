import "../Event/Event.scss";
import { getImageURL } from "../../data/utils.js";
import ExpandableImage from "../ExpandableImage/ExpandableImage.jsx";

function Event({ event }) {
  return (
    <div className="event">
      <div className="event__profile">
        <h3 className="event__subtitle">{event.title}</h3>
        <ExpandableImage
          src={getImageURL(event)}
          title={event.title}
          description={event.description}
        />
        <p className="event__text">{event.description}</p>
      </div>
    </div>
  );
}

export default Event;
