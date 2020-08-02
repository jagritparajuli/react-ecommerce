import React, { Component } from "react";
import "./directory.styles.scss";
import { MenuItem } from "./../menu-item/menu-item.component";
import section_data from "./directory.data";

export default class Directory extends Component {
  state = {
    sections: section_data,
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} image={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
