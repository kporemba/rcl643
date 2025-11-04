import "../PhotoTemplate/PhotoTemplate.scss";
import * as React from "react";
import { useCallback, useState } from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../data/data.json";
import { useParams } from "react-router";
import ExpandableImage from "../../components/ExpandableImage/ExpandableImage";
import useMediaQuery from "@mui/material/useMediaQuery";

function PhotoTemplate() {
  const isMobile = !useMediaQuery("(min-width:768px)");
  const { id: setId } = useParams();
  const event = data.find((item) => item.id === setId);
  const [activeIndex, setActiveIndex] = useState(null);
  const arrLength = event.images.length;
  const next = useCallback(() => {
    setActiveIndex((activeIndex + 1) % arrLength);
  }, [activeIndex, arrLength]);
  const prev = useCallback(() => {
    setActiveIndex(activeIndex >= 1 ? activeIndex - 1 : arrLength - 1);
  }, [activeIndex, arrLength]);
  if (!event) {
    return null;
  }
  return (
    <div className="template">
      <h1 className="template__title">{event.title}</h1>
      <p className="template__description">{event.description}</p>
      <ImageList
        className="template__gallery"
        cols={isMobile ? 1 : 3}
        rowHeight={"auto"}
      >
        {event.images.map((item, index) => (
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

export default PhotoTemplate;
