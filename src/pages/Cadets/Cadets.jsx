import "../Cadets/Cadets.scss";
import logo from "../../assets/images/cadets/cadetsLogo.jpg";
import mimico from "../../assets/images/cadets/mimico.jpg";
import scottish from "../../assets/images/cadets/scottish.jpg";
import cadets from "../../assets/images/cadets/cadets1.jpg";
import ojibwa from "../../assets/images/cadets/ojibwa.jpg";

function Cadets() {
  return (
    <div className="cadets">
      <h1 className="cadets__title">Cadets</h1>
      <div className="cadets__intro">
        <img src={logo} className="cadets__mainLogo" />
        <p className="cadets__text">
          The Royal Canadian Legion Branch 643 works with 4 Sea, Air, Army and
          Navy League Cadet Corps
        </p>
        <p className="cadets__text cadets__text--special">
          The Youth of today are the furture of tomorrow
        </p>
      </div>

      <h2 className="cadets__subheading">
        Branch 643 is proud to sponsor the following cadet corps:
      </h2>

      <div className="cadets__groupWrapper">
        <div className="cadets__group">
          <div className="cadets__groupText">
            <h3 className="cadets__subtitle">
              272 Royal Canadian Sea Cadets Corps Ojibwa
            </h3>
            <p>
              <a
                href="https://rcsccojibwa.weebly.com"
                target="_blank"
                className="cadets__link"
              >
                Visit their website.
              </a>
            </p>
          </div>
          <a href="https://rcsccojibwa.weebly.com" target="_blank">
            <img src={ojibwa} className="cadets__logo" />
          </a>
        </div>
        <div className="cadets__group">
          <div className="cadets__groupText">
            <h3 className="cadets__subtitle">
              75 Toronto Scottish Regiment Army Cadet Corps
            </h3>
            <p>
              <a
                href="https://www.facebook.com/75torontoscottish/"
                target="_blank"
                className="cadets__link"
              >
                Visit their website.
              </a>
            </p>
          </div>
          <a href="https://www.facebook.com/75torontoscottish/" target="_blank">
            <img src={scottish} className="cadets__logo" />
          </a>
        </div>
        <div className="cadets__group">
          <div className="cadets__groupText">
            <h3 className="cadets__subtitle">
              142 Mimico Squadron Royal Canadian Air Cadets
            </h3>
            <p>
              <a
                href="https://www.142sqn.ca/"
                target="_blank"
                className="cadets__link"
              >
                Visit their website.
              </a>
            </p>
          </div>
          <a href="https://www.142sqn.ca/" target="_blank">
            <img src={mimico} className="cadets__logo" />
          </a>
        </div>
        <div className="cadets__group">
          <div className="cadets__groupText">
            <h3 className="cadets__subtitle">NLCC Temeraire </h3>
            <p>
              <a
                href="https://www.facebook.com/NLCCTemeraire/"
                target="_blank"
                className="cadets__link"
              >
                Visit their website.
              </a>
            </p>
          </div>
          <img src={cadets} className="cadets__logo" />
        </div>
      </div>
    </div>
  );
}

export default Cadets;
