import React from "react";
import { List, ListItem, ListSubheader } from "lib";
import { getDefaultParams } from "stories/core/config";

import "./story.scss";

export const API = (args) => (
  <div className="api-demo">
    <List {...args}>
      <ListSubheader>Playground Subheader</ListSubheader>
      <ListItem>Single Line Item</ListItem>
      <ListItem>Single Line Item</ListItem>
      <ListItem>Single Line Item</ListItem>
    </List>
  </div>
);

API.parameters = getDefaultParams();

API.args = {};
