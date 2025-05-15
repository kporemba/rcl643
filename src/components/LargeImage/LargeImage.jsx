import "../LargeImage/LargeImage.scss";
import { getImageURL } from "../../data/utils.js";

function LargeImage(props) {
  const { event, close } = props;
  return (
    <div className="image">
      <img src={getImageURL(event)} className="image__img" alt={event.title} />
      <p className="image__text">{event.description}</p>

      <button onClick={close} className="image__button">
        Exit
      </button>
    </div>
  );
}

export default LargeImage;
