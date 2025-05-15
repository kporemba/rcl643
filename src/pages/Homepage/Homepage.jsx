import "../Homepage/Homepage.scss";
import header from "../../assets/images/header.jpg";
import hours from "../../assets/images/hours.jpg";
import event from "/public/assets/events/mayPoster.jpg";
import Membership from "../../components/Membership/Membership";

function Homepage() {
  return (
    <div className="homepage">
      <div className="headerContainer">
        <img src={header} className="homepage__header"></img>
        <h1 className="homepage__title">
          Welcome to Branch 643, Royal Canadian Legion
        </h1>
      </div>

      <div className="homepage__introGroup">
        <div className="homepage__hoursGroup ">
          <h2 className="homepage__subtitle">Hours of Operation</h2>
          <img src={hours} className="homepage__hours"></img>
        </div>
        <div className="homepage__eventsGroup ">
          <h2 className="homepage__subtitle">Upcoming Events</h2>
          {/* <img src={generalMeeting} className="homepage__eventImg" /> */}
          <img src={event} className="homepage__eventImg" />
        </div>
        <div className="homepage__rightGroup">
          <div className="homepage__contactGroup homepage__contactGroup--style">
            <h2 className="homepage__subtitle">Contact Us</h2>
            <p className="homepage__text">
              <strong>Clubroom:</strong> 416-259-0285
            </p>
            <p className="homepage__text">
              <strong>Office:</strong> 416-231-2021
            </p>
            <p className="homepage__text">
              <strong>Address:</strong> 110 Jutland Road, Toronto ON, M8Z 2H1
            </p>
            <p className="homepage__text">
              <strong>Email:</strong> rcbranch643@gmail.com
            </p>
            <p className="homepage__text">
              <strong>Facebook: </strong>
              <a
                href="https://www.facebook.com/groups/1860547480892497"
                target="_blank"
                className="contact__link"
              >
                https://facebook.com/groups/rcl643
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
