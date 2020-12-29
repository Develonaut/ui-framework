import React from "react";
import { Button } from "lib";
import { getDefaultParams } from "stories/core/config";

import "./story.scss";

export const Text = () => (
  <div className="demo">
    <Button variant="text">Default</Button>
    <Button variant="text" color="primary">
      Primary
    </Button>
    <Button variant="text" disabled>
      Disabled
    </Button>
    <Button variant="text" color="primary" href="#text-buttons">
      Link
    </Button>
  </div>
);

Text.parameters = getDefaultParams();
