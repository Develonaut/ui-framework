import React from "react";
import { Select } from "lib";

import { getDefaultParams } from "stories/core/config";

import "./story.scss";

export const Basic = () => (
  <form className="demo">
    <Select>
      <option aria-label="None" value="" />
      <option value={10}>Ten</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
    </Select>
  </form>
);

Basic.parameters = getDefaultParams();
