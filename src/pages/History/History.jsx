import "../History/History.scss";
import hornell from "../../assets/images/history/hornell.jpg";
import streight from "../../assets/images/history/streight.jpg";
import history from "../../assets/images/history/legion-flag.jpg";
import { NavLink } from "react-router";

function History() {
  return (
    <div className="history">
      <h1 className="history__title">History</h1>
      <p className="history__text">
        Royal Canadian Legion Branch 643 works everyday to share important
        history. Here are some importannt individuals who helped shape our
        community.
      </p>
      <div className="history__group">
        <div className="history__profile">
          <NavLink to="/history/david-hornell" className="link">
            <img src={hornell} className="history__img" />
          </NavLink>
          <h3 className="history__subtitle">David Hornell</h3>
          <NavLink to="/history/david-hornell" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
        <div className="history__profile">
          <NavLink to="/history/streight" className="link">
            <img src={streight} className="history__img" />
          </NavLink>
          <h3 className="history__subtitle">Col. E Streight</h3>
          <NavLink to="/history/streight" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
        <div className="history__profile">
          <NavLink to="/history/branch-summary" className="link">
            <img src={history} className="history__img" />
          </NavLink>
          <h3 className="history__subtitle">
            History Of The Etobicoke Legions
          </h3>
          <NavLink to="/history/branch-summary" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default History;
