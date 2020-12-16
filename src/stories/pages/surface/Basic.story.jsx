import React from "react";
import { Surface } from "lib";

import { getDefaultParams } from "stories/core/config";

import "./story.scss";

export const Basic = () => (
  <div className="demo">
    <Surface elevation={0} />
    <Surface />
    <Surface elevation={3} />
  </div>
);

Basic.parameters = getDefaultParams();
