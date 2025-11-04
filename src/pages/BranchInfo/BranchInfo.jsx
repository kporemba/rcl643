import "../BranchInfo/BranchInfo.scss";
import React, { useState, useCallback } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Membership from "../../components/Membership/Membership";
import data from "../../data/data.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandableImage from "../../components/ExpandableImage/ExpandableImage";

function BranchInfo() {
  const isMobile = !useMediaQuery("(min-width:768px)");
  const itemData = data.find((item) => item.id === "4");
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
    <div className="branchInfo">
      <h1 className="branchInfo__title">Branch Information</h1>

      <div className="branchInfo__positions">
        <h2 className="branchInfo__subtitle">Branch Executives</h2>
        <div className="branchInfo__table">
          <table className="table">
            <thead>
              <tr className="table__rowGroup table__rowGroup--title">
                <th className="table__row table__row--title">Position</th>
                <th className="table__row table__row--title">Individual</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table__rowGroup">
                <th className="table__row">President</th>
                <th className="table__row">Donna Sampson</th>
              </tr>
              <tr className="table__rowGroup table__rowGroup--special">
                <th className="table__row">1st Vice President</th>
                <th className="table__row">Bill Law</th>
              </tr>
              <tr className="table__rowGroup">
                <th className="table__row">2nd Vice President</th>
                <th className="table__row">Shelley Sing</th>
              </tr>
              <tr className="table__rowGroup table__rowGroup--special">
                <th className="table__row">Past President</th>
                <th className="table__row">Brenda Nash</th>
              </tr>
              <tr className="table__rowGroup">
                <th className="table__row">Secretary Treasurer</th>
                <th className="table__row">Helene Simpson</th>
              </tr>
              <tr className="table__rowGroup table__rowGroup--special">
                <th className="table__row">Sergeant At Arms</th>
                <th className="table__row">Todd Reid</th>
              </tr>
              <tr className="table__rowGroup">
                <th className="table__row">Youth Education</th>
                <th className="table__row">Donna Sampson</th>
              </tr>
              <tr className="table__rowGroup table__rowGroup--special">
                <th className="table__row">Sick & Visiting</th>
                <th className="table__row">Josie Colter</th>
              </tr>
              <tr className="table__rowGroup">
                <th className="table__row">Membership</th>
                <th className="table__row">Pat Mackenzie</th>
              </tr>
              <tr className="table__rowGroup table__rowGroup--special">
                <th className="table__row">Ways & Means</th>
                <th className="table__row">Shelley Sing</th>
              </tr>
              <tr className="table__rowGroup">
                <th className="table__row">Property & Pro</th>
                <th className="table__row">Dale Betts</th>
              </tr>
              <tr className="table__rowGroup table__rowGroup--special">
                <th className="table__row">Cadet</th>
                <th className="table__row">Brenda Nash</th>
              </tr>
              <tr className="table__rowGroup">
                <th className="table__row">Poppy</th>
                <th className="table__row">Donna Sampson</th>
              </tr>
              <tr className="table__rowGroup table__rowGroup--special">
                <th className="table__row">Sports</th>
                <th className="table__row">Vic Sing</th>
              </tr>
              <tr className="table__rowGroup">
                <th className="table__row">Service Officer</th>
                <th className="table__row">Bill Law</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Membership />

      <div className="branchInfo__history">
        <h1 className="branchInfo__title branchInfo__title--history">
          Branch History
        </h1>
        <p className="branchInfo__text">
          Branch 643 Flight Lieutenant David Ernest Hornell, VC was formed in
          2017 after the merger of Branch 3 Sir Winston Spencer Churchill and
          Branch 210 Col. J.E.L. Streight. Prior to that in 2004, Branch 217
          Humber Bay was merged into Branch 3.
        </p>
        <h2 className="branchInfo__subtitle">{itemData.title}</h2>
        <p className="branchInfo__text">{itemData.description1}</p>
        <p className="branchInfo__text">{itemData.description2}</p>
        <p className="branchInfo__text">{itemData.description3}</p>
      </div>

      <ImageList
        className="branchInfo__gallery"
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

export default BranchInfo;
//   {
//     img: "/assets/amalgamation/1.jpg",
//     title: "Breakfast",
//   },
//   {
//     img: "/assets/amalgamation/2.jpg",
//     title: "Breakfast",
//   },
//   {
//     img: "/assets/amalgamation/3.jpg",
//     title: "Breakfast",
//   },
//   {
//     img: "/assets/amalgamation/4.jpg",
//     title: "Breakfast",
//   },
//   {
//     img: "/assets/amalgamation/5.jpg",
//     title: "Breakfast",
//   },
//   {
//     img: "/assets/amalgamation/6.jpg",
//     title: "Breakfast",
//   },
//   {
//     img: "/assets/amalgamation/7.jpg",
//     title: "Breakfast",
//   },
//   {
//     img: "/assets/amalgamation/8.jpg",
//     title: "Breakfast",
//   },
//   {
//     img: "/assets/amalgamation/9.jpg",
//     title: "Breakfast",
//   },
// ];
