import React from "react";
import { Select } from "lib";
import { getDefaultParams } from "stories/core/config";

export const API = (args) => (
  <Select label="Age" {...args}>
    <option aria-label="None" value="" />
    <option value={10}>Ten</option>
    <option value={20}>Twenty</option>
    <option value={30}>Thirty</option>
  </Select>
);

API.parameters = getDefaultParams();

API.args = {};
