import "../Veterans/Veterans.scss";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../data/data.json";

function Veterans() {
  const itemData = data.find((item) => item.id === "3");
  if (!itemData) return null;
  return (
    <div className="veterans">
      <h1 className="veterans__title">{itemData.title}</h1>
      <p className="veterans__text">{itemData.description}</p>
      <h2 className="veterans__subtitle">Services and Supports</h2>
      <p className="veterans__text">
        In addition to directly assisting Veterans and their families with the
        disability claims process through Veterans Affairs Canada (VAC), the
        Legion offers a variety of programs, resources and referrals to support
        Veteran health, transition to civilian life, financial assistance and
        well-being.
      </p>
      <p className="veterans__text">
        Access these services via{" "}
        <a
          href="https://legion.ca/support-for-veterans"
          className="veterans__link"
        >
          https://legion.ca/support-for-veterans
        </a>{" "}
        or reaching out to First Vice President Bill Law{" "}
        <a href="mailto:w.j.lawerogers.com"> w.j.lawerogers.com</a>
      </p>

      <div className="veterans__galleryMobile">
        <ImageList className="veterans__gallery" cols={1} rowHeight={"auto"}>
          {itemData.images.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <div className="veterans__galleryTablet">
        <ImageList className="veterans__gallery" cols={3} rowHeight={"auto"}>
          {itemData.images.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

export default Veterans;
