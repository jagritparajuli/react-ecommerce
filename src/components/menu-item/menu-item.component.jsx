import React from "react";
import "./menu-item.styles.scss";
export const MenuItem = (props) => {
  const { title } = props;
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
