import "../Homepage/Homepage.scss";
import header from "../../assets/images/header.jpg";
import hours from "../../assets/images/hours.jpg";
import Membership from "../../components/Membership/Membership";
import { sortEvents } from "../Events/utils.js";
import { getImageURL } from "../../data/utils.js";
import { NavLink } from "react-router";

function Homepage() {
  const { currentEvents, pastEvents } = sortEvents();
  const displayEvent = getImageURL(
    currentEvents.length ? currentEvents[0] : pastEvents[0]
  );
  return (
    <div className="homepage">
      <div className="headerContainer">
        <img src={header} className="homepage__header"></img>
        <h1 className="homepage__title">
          Welcome to Branch 643, Royal Canadian Legion
        </h1>
      </div>

      <div className="homepage__introGroup">
        <div className="homepage__hoursGroup">
          <h2 className="homepage__subtitle">Hours of Operation</h2>
          <img src={hours} className="homepage__hours"></img>
        </div>
        <NavLink className="homepage__eventsGroup" to={"/events"}>
          <h2 className="homepage__subtitle">
            {currentEvents.length ? "Upcoming Events" : "Past Events"}
          </h2>
          <img src={displayEvent} className="homepage__eventImg" />
        </NavLink>
        <div className="homepage__rightGroup">
          <div className="homepage__contactGroup homepage__contactGroup--style">
            <NavLink to="/contact">
              <h2 className="homepage__subtitle">Contact Us</h2>
            </NavLink>
            <p className="homepage__text">
              <strong>Clubroom: </strong>
              <a href="tel:416-259-0285" className="contact__link">
                416-259-0285
              </a>
            </p>
            <p className="homepage__text">
              <strong>Office: </strong>
              <a href="tel:416-231-2021" className="contact__link">
                416-231-2021
              </a>
            </p>
            <p className="homepage__text">
              <strong>Address: </strong>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Flight+Lieutenant+David+Hornell+V+C"
                className="contact__link"
              >
                110 Jutland Road, Toronto ON, M8Z 2H1
              </a>
            </p>
            <p className="homepage__text">
              <strong>Email: </strong>
              <a href="mailto:rcbranch643@gmail.com" className="contact__link">
                rcbranch643@gmail.com
              </a>
            </p>
            <p className="homepage__text">
              <strong>Members Facebook Group: </strong>
              <a
                href="https://www.facebook.com/groups/1860547480892497"
                target="_blank"
                className="contact__link"
              >
                https://www.facebook.com/share/g/1A1bs4uA1P/
              </a>
            </p>
            <p className="homepage__text">
              <strong>Community Facebook Group: </strong>
              <a
                href="https://www.facebook.com/groups/1227586192155005"
                target="_blank"
                className="contact__link"
              >
                https://www.facebook.com/share/g/1Ch6RgTu2V/
              </a>
            </p>
          </div>
          <div className="homepage__specialAnnouncementGroup">
            <h2 className="homepage__subtitle">Special Announcements</h2>
            <p>There are currently no special announcements.</p>
          </div>
        </div>
      </div>

      <div className="membershipSpace">
        <Membership />
      </div>
    </div>
  );
}

export default Homepage;
