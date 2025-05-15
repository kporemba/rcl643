import "../Event/Event.scss";
import { getImageURL } from "../../data/utils.js";
import LargeImage from "../LargeImage/LargeImage.jsx";
import { useState } from "react";

function Event({ event }) {
  const [click, setClick] = useState(false);
  return (
    <div className="event">
      <div className="event__profile">
        <h3 className="event__subtitle">{event.title}</h3>
        <img
          src={getImageURL(event)}
          className="event__img"
          alt={event.title}
          onClick={() => setClick(!click)}
        />
        <p className="event__text">{event.description}</p>
      </div>
      {click && <LargeImage event={event} close={() => setClick(false)} />}
    </div>
  );
}

export default Event;
