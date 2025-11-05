import "../ContactInfo/Contact.scss";
import hours from "../../assets/images/hours.jpg";
import Membership from "../../components/Membership/Membership";
import vet from "/assets/veterans/5.jpg";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact The Royal Canadian Legion</h1>
      <div className="contact__wrapper">
        <div className="contact__group">
          <h2 className="contact__subtitle">Branch 643</h2>
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
        <div className="contact__group">
          <h2 className="contact__subtitle"> Ontario Command</h2>
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
              className="contact__link"
            >
              https://on.legion.ca/
            </a>
          </p>
        </div>
        <div className="contact__group">
          <h2 className="contact__subtitle"> National Headquarters</h2>
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
              className="contact__link"
            >
              https://legion.ca/home
            </a>
          </p>
        </div>
      </div>
      <Membership />
      <div className="contact__wrapper">
        <div className="contact__hours">
          <h2 className="contact__subtitle">Clubroom Hours</h2>
          <img src={hours} className="contact__hoursImg"></img>
        </div>
        <div className="contact__veteranAffairs">
          <h2 className="contact__subtitle">Veteran Affairs Contact</h2>
          <p>
            If you would like to inquire about veteran affairs, resources or
            general questions, please reach out to Bill Law, 1st Vice President.
          </p>
          <p>
            Contact via email at{" "}
            <a href="mailto:w.j.law@rogers.com"> w.j.law@rogers.com</a>
          </p>
          <img className="contact__vetImg" src={vet} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
