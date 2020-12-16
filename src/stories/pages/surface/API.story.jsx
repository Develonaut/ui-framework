import React from "react";
import { Surface } from "lib";
import { getDefaultParams } from "stories/core/config";

import "./story.scss";

export const API = (args) => (
  <div className="demo">
    <Surface {...args} />
  </div>
);

API.parameters = getDefaultParams();

API.args = {};
