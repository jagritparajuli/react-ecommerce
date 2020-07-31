import React from "react";
import "./menu-item.styles.scss";
export const MenuItem = (props) => {
  const { title, image, size } = props;
  return (
    <div className="menu-item" className={`${size} menu-item`}>
      <div
        className="background"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
