import "../PhotoGallery/PhotoGallery.scss";
import { NavLink } from "react-router";
import cenotaph from "/public/assets/events/cenotaph/01.jpg";
import remembrance from "/public/assets/events/remembrance/1.jpg";

function PhotoGallery() {
  return (
    <div className="gallery">
      <h1 className="gallery__title">Photo Gallery</h1>

      <div className="gallery__group">
        <div className="gallery__profile">
          <img src={cenotaph} className="gallery__img" />
          <h3 className="gallery__subtitle">Cenotaph Relocation</h3>
          <NavLink to="/event/5" className="link">
            <button className="gallery__button">See More</button>
          </NavLink>
        </div>
        <div className="gallery__profile">
          <img src={remembrance} className="gallery__img" />
          <h3 className="gallery__subtitle">Remembrance Day</h3>
          <NavLink to="/event/2" className="link">
            <button className="gallery__button">See More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
