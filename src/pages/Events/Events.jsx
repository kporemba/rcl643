import "../Events/Events.scss";
import { NavLink } from "react-router";
import Event from "../../components/Event/Event";

function Events() {
  return (
    <div className="events">
      <h1 className="events__title">Upcoming Events</h1>

      <div className="events__group">
        <Event
          event={{
            title: "May Dinner and Dance",
            description: "Tickets are 25$, available at the Clubroom Bar.",
            imageId: "mayPoster",
          }}
        />

        <Event
          event={{
            title: "D-Day Memorial",
            description:
              "D-Day and the Battle of Normandy Annual Parade and Memorial Service Sunday June 1, 2025.",
            imageId: "dDay",
          }}
        />
      </div>
      <h1 className="events__title">Past Events</h1>
      <div className="events__group">
        <Event
          event={{
            title: "Food Drive",
            description: "April 1st - May 13th",
            imageId: "foodDrive",
          }}
        />
        <Event
          event={{
            title: "General Meeting",
            description: "Come out and support your branch.",
            imageId: "general-meeting",
          }}
        />
        <div className="events__chunk">
          <Event
            event={{
              title: "King Charlges III Coronation Medal Ceremony",
              description:
                "Congratulations to Branch President Donna Sampson and Branch First Vice President William Law on being presented with the King Charles III Coronation medal by MP James Maloney before a full house at Branch 643 on March 4th.",
              imageId: "coronation/8",
            }}
          />
          <NavLink to="/event/1" className="link">
            <button className="events__button">See Photos</button>
          </NavLink>
        </div>
        <div className="events__chunk">
          <Event
            event={{
              title: "Remembrance Day 2024",
              description:
                "Branch 643 welcomed members from the public and local elementary students to our 2024 Remembrance Day service.",
              imageId: "remembrance/1",
            }}
          />
          <NavLink to="/event/2" className="link">
            <button className="events__button">See Photos</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Events;
