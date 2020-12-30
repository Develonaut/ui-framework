import React, { useState } from "react";
import { List, ListItem, ListSubheader } from "lib";

import "./story.scss";
import { getDefaultParams } from "stories/core/config";

export const Variations = () => {
  const [dense, setDense] = useState(false);
  const [subheadings, setSubheadings] = useState(true);
  const [selected, setSelected] = useState(true);

  return (
    <div className="demo">
      <div className="demo-controls">
        <div className="demo-controls-checkbox">
          <input
            id="dense"
            type="checkbox"
            checked={dense}
            onChange={(event) => setDense(event.target.checked)}
          />
          <label htmlFor="dense">Toggle Dense</label>
        </div>
        <div className="demo-controls-checkbox">
          <input
            id="subheading"
            type="checkbox"
            checked={subheadings}
            onChange={(event) => setSubheadings(event.target.checked)}
          />
          <label htmlFor="subheading">Toggle Subheadings</label>
        </div>
        <div className="demo-controls-checkbox">
          <input
            id="selected"
            type="checkbox"
            checked={selected}
            onChange={(event) => setSelected(event.target.checked)}
          />
          <label htmlFor="selected">Toggle Selected</label>
        </div>
      </div>
      <div className="list-group">
        <List dense={dense}>
          {subheadings && <ListSubheader>Default List</ListSubheader>}
          <ListItem>Single Line Item</ListItem>
          <ListItem>Single Line Item</ListItem>
          <ListItem>Single Line Item</ListItem>
        </List>
        <List dense={dense}>
          {subheadings && <ListSubheader>List Item Buttons</ListSubheader>}
          <ListItem button>Single Line Item</ListItem>
          <ListItem button disabled>
            Single Line Item
          </ListItem>
          <ListItem button>Single Line Item</ListItem>
        </List>
        <List dense={dense}>
          {subheadings && <ListSubheader>With Dividers</ListSubheader>}
          <ListItem divider>Single Line Item</ListItem>
          <ListItem divider>Single Line Item</ListItem>
          <ListItem divider>Single Line Item</ListItem>
        </List>
        <List dense={dense}>
          {subheadings && <ListSubheader>With Selected</ListSubheader>}
          <ListItem>Single Line Item</ListItem>
          <ListItem selected={selected}>Single Line Item</ListItem>
          <ListItem>Single Line Item</ListItem>
        </List>
      </div>
    </div>
  );
};
