import "./ExpandableImage.scss";
import { useCallback, useEffect, useState } from "react";
import { Dialog } from "@mui/material";

function ExpandableImage(props) {
  const { title, src, description, globalOpen, next, prev, onOpen, fullWidth } =
    props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (globalOpen !== null) setOpen(globalOpen);
  }, [globalOpen]);

  const toggle = useCallback(() => {
    if (!open) {
      onOpen?.();
    }
    setOpen(!open);
  }, [open, onOpen]);

  return (
    <>
      <img
        src={src}
        className={"image__small_img" + (fullWidth ? " image__full_width" : "")}
        alt={title}
        onClick={toggle}
      />
      <Dialog open={open} onClose={toggle}>
        <div className="image">
          <div className="image__container">
            {prev ? (
              <button onClick={prev} className="image__control_button">
                Prev
              </button>
            ) : (
              <div />
            )}
            <img src={src} className="image__img" alt={title} />
            {next ? (
              <button onClick={next} className="image__control_button">
                Next
              </button>
            ) : (
              <div />
            )}
          </div>
          {description && <p className="image__text">{description}</p>}
          <button onClick={toggle} className="image__button">
            Exit
          </button>
        </div>
      </Dialog>
    </>
  );
}

export default ExpandableImage;
