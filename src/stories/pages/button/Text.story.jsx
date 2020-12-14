import React from "react";
import { Button } from "lib";
import { getDefaultParams } from "stories/core/config";

export const Text = () => (
  <>
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
  </>
);

Text.parameters = getDefaultParams();
