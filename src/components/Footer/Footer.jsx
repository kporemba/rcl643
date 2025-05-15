import "../Footer/Footer.scss";
import facebook from "../../assets/icons/Icon-facebook.svg";

function footer() {
  return (
    <div className="footer">
      <h2 className="footer_contactGroup">Contact Us</h2>
      <div className="footer__wrapper">
        <div className="footer__group">
          <h3 className="footer__subtitle">Branch 643</h3>
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
              className="footer__link"
            >
              https://facebook.com/rcl643
            </a>
          </p>
        </div>
        <div className="footer__group">
          <h3 className="footer__subtitle"> Ontario Command</h3>
          <p className="homepage__text">
            <strong>Toll Free:</strong> 1-888-207-0939
          </p>
          <p className="homepage__text">
            <strong>Phone:</strong> 905-841-7999
          </p>
          <p className="homepage__text">
            <strong>Fax:</strong> 905-841-9999
          </p>
          <p className="homepage__text">
            <strong>Address:</strong> 89 Industrial Parkway North Aurora, ON,
            L4G 4C4
          </p>
          <p className="homepage__text">
            <strong>Email:</strong> info@on.legion.ca
          </p>
          <p className="homepage__text">
            <strong>Website: </strong>
            <a
              href="https://on.legion.ca/"
              target="_blank"
              className="footer__link"
            >
              https://on.legion.ca/
            </a>
          </p>
        </div>
        <div className="footer__group">
          <h3 className="footer__subtitle"> National Headquaters</h3>
          <p className="homepage__text">
            <strong>Toll Free:</strong> 1-888-556-6222
          </p>
          <p className="homepage__text">
            <strong>Main Reception:</strong> 1-613-591-3335
          </p>
          <p className="homepage__text">
            <strong>Fax:</strong> 1-613-591-9335
          </p>
          <p className="homepage__text">
            <strong>Address:</strong> 86 Aird Place Ottawa, ON K2L 0A1
          </p>

          <p className="homepage__text">
            <strong>Website: </strong>
            <a
              href="https://legion.ca/home"
              target="_blank"
              className="footer__link"
            >
              https://legion.ca/home
            </a>
          </p>
        </div>
        {/* <div className="footer__group">
          <h4>Headquarters Departments</h4>
          <p className="homepage__text">
            <strong>Veterans Services: </strong>
            877-534-4666
          </p>
          <p className="homepage__text">
            <strong>Member Services: </strong>
            855-330-3344
          </p>
          <p className="homepage__text">
            <strong> Poppy and Remembrance: </strong>
            613-591-3335 ext. 229
          </p>
          <p className="homepage__text">
            <strong>Supply/Poppy Store: </strong>
            888-301-2268
          </p>
          <p className="homepage__text">
            <strong>Legion Magazine: </strong> 1-613-591-0116
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default footer;
