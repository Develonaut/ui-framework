import React from "react";
import { Button } from "lib";
import { getDefaultParams } from "stories/core/config";

import "./story.scss";

export const Contained = () => (
  <div className="demo">
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button disabled>Disabled</Button>
    <Button href="#contained-buttons" color="primary">
      Link
    </Button>
  </div>
);

Contained.parameters = getDefaultParams();
