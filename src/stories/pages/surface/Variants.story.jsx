import React from "react";
import { Surface } from "lib";
import { getDefaultParams } from "stories/core/config";

import "./story.scss";

export const Variants = () => (
  <div className="demo">
    <Surface variant="outlined" />
    <Surface variant="outlined" square />
  </div>
);

Variants.parameters = getDefaultParams();
