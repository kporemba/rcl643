import "../PhotoTemplate/PhotoTemplate.scss";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../data/data.json";
import { useParams } from "react-router";

function PhotoTemplate() {
  const { id: setId } = useParams();
  const event = data.find((item) => item.id === setId);
  if (!event) return null;
  return (
    <div className="template">
      <h1 className="template__title">{event.title}</h1>
      <p className="template__description">{event.description}</p>
      <ImageList className="template__gallery" cols={3} rowHeight={"auto"}>
        {event.images.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default PhotoTemplate;
