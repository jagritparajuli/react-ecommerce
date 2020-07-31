import React, { Component } from "react";
import "./directory.styles.scss";
import { MenuItem } from "./../menu-item/menu-item.component";
import section_data from "../../directory.data.js.js";

export default class Directory extends Component {
  state = {
    sections: section_data,
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem key={section.id} title={section.title.toUpperCase()} />
        ))}
      </div>
    );
  }
}
