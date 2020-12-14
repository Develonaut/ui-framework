import React from "react";
import { Button } from "lib";
import { getDefaultParams } from "stories/core/config";

export const Contained = () => (
  <>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button disabled>Disabled</Button>
    <Button href="#contained-buttons" color="primary">
      Link
    </Button>
  </>
);

Contained.parameters = getDefaultParams();
