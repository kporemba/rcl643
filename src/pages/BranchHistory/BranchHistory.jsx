import "../BranchHistory/BranchHistory.scss";
import { NavLink } from "react-router";
import branch3 from "../../assets/images/history/branch3.jpg";
import branch101 from "../../assets/images/history/branch101.jpg";
import branch210 from "../../assets/images/history/branch210.jpg";
import branch213 from "../../assets/images/history/branch213.jpg";
import branch217 from "../../assets/images/history/branch217.jpg";
import branch266 from "../../assets/images/history/branch266.jpg";
import branch286 from "../../assets/images/history/branch286.jpg";
import branch528 from "../../assets/images/history/branch528.jpg";

function BranchHistory() {
  return (
    <div className="bHistory">
      <h1 className="bHistory__title">History of The Legions</h1>
      <p className="bHistory__text">
        Written in 1986, the local Etobicoke Legions documented the history of
        their communities. From Ladies Auxiliaries to notable members to
        remembrance ceremonies, all memories were written down.{" "}
      </p>

      <div className="bHistory__group">
        <div className="bHistory__profile">
          <NavLink to="/history/branch3" className="link">
            <img src={branch3} className="bHistory__img" />
          </NavLink>
          <h3 className="bHistory__subtitle">Branch 3</h3>
          <NavLink to="/history/branch3" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
        <div className="bHistory__profile">
          <NavLink to="/history/branch101" className="link">
            <img src={branch101} className="bHistory__img" />
          </NavLink>
          <h3 className="bHistory__subtitle">Branch 101</h3>
          <NavLink to="/history/branch101" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
        <div className="bHistory__profile">
          <NavLink to="/history/branch210" className="link">
            <img src={branch210} className="bHistory__img" />
          </NavLink>
          <h3 className="bHistory__subtitle">Branch 210</h3>
          <NavLink to="/history/branch210" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
        <div className="bHistory__profile">
          <NavLink to="/history/branch213" className="link">
            <img src={branch213} className="bHistory__img" />
          </NavLink>
          <h3 className="bHistory__subtitle">Branch 213</h3>
          <NavLink to="/history/branch213" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
        <div className="bHistory__profile">
          <NavLink to="/history/branch217" className="link">
            <img src={branch217} className="bHistory__img" />
          </NavLink>
          <h3 className="bHistory__subtitle">Branch 217</h3>
          <NavLink to="/history/branch217" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
        <div className="bHistory__profile">
          <NavLink to="/history/branch266" className="link">
            <img src={branch266} className="bHistory__img" />
          </NavLink>
          <h3 className="bHistory__subtitle">Branch 266</h3>
          <NavLink to="/history/branch266" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
        <div className="bHistory__profile">
          <NavLink to="/history/branch286" className="link">
            <img src={branch286} className="bHistory__img" />
          </NavLink>
          <h3 className="bHistory__subtitle">Branch 286</h3>
          <NavLink to="/history/branch286" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
        <div className="bHistory__profile">
          <NavLink to="/history/branch528" className="link">
            <img src={branch528} className="bHistory__img" />
          </NavLink>
          <h3 className="bHistory__subtitle">Branch 528</h3>
          <NavLink to="/history/branch528" className="link">
            <button className="history__button">Learn More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BranchHistory;
