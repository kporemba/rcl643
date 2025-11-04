import "../Veterans/Veterans.scss";
import React, { useState, useCallback } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../data/data.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandableImage from "../../components/ExpandableImage/ExpandableImage";

function Veterans() {
  const isMobile = !useMediaQuery("(min-width:768px)");
  const itemData = data.find((item) => item.id === "3");
  const [activeIndex, setActiveIndex] = useState(null);
  const arrLength = itemData.images.length;
  const next = useCallback(() => {
    setActiveIndex((activeIndex + 1) % arrLength);
  }, [activeIndex, arrLength]);
  const prev = useCallback(() => {
    setActiveIndex(activeIndex >= 1 ? activeIndex - 1 : arrLength - 1);
  }, [activeIndex, arrLength]);

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

      <ImageList
        className="veterans__gallery"
        cols={isMobile ? 1 : 3}
        rowHeight={"auto"}
      >
        {itemData.images.map((item, index) => (
          <ImageListItem key={item.img}>
            <ExpandableImage
              src={item.img}
              alt={item.title}
              globalOpen={activeIndex !== null ? index === activeIndex : null}
              onOpen={() => setActiveIndex(index)}
              next={next}
              prev={prev}
              fullWidth
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Veterans;
