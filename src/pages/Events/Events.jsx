import "../Events/Events.scss";
import { NavLink } from "react-router";
import Event from "../../components/Event/Event";
import allEvents from "./events.json";
import { sortEvents } from "./utils";

function Events() {
  const { currentEvents, pastEvents } = sortEvents();
  return (
    <div className="events">
      {!!currentEvents.length && (
        <>
          <h1 className="events__title">Upcoming Events</h1>
          <div className="events__group">
            <EventList events={currentEvents} />
          </div>
        </>
      )}
      <h1 className="events__title">Past Events</h1>
      <div className="events__group">
        <EventList events={pastEvents} />
      </div>
    </div>
  );
}

function EventList(props) {
  const { events } = props;
  return events.map((event) => {
    if (event.photoCta) {
      return (
        <div className="events__chunk">
          <Event event={event} />
          <NavLink to={event.photoCta} className="link">
            <button className="events__button">See Photos</button>
          </NavLink>
        </div>
      );
    }
    return <Event event={event} />;
  });
}

export default Events;
