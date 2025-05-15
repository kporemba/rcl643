import "../Membership/Membership.scss";
import membership from "../../assets/new-legion_membership-application_en.pdf";
import logo from "../../assets/images/logo.jpeg";

function Membership() {
  return (
    <div className="membership">
      <div className="membership__groupImg">
        <img src={logo} className="membership__logo" />
      </div>
      <div className="membership__group">
        <h2 className="membership__subtitle">Membership</h2>
        <p className="membership__text">
          If you would like to become a member, download the{" "}
          <a href={membership} target="_blank" className="membership__link">
            Membership Form
          </a>
          . Please email it to rcbranch643@gmail.com.
        </p>
      </div>
    </div>
  );
}

export default Membership;
