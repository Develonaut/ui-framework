import React from "react";
import { Button } from "../component";

export const Playground = (args) => <Button {...args} />;
Playground.args = {
  children: "Default",
};

export const Contained = () => (
  <>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button disabled>Disabled</Button>
  </>
);

Contained.parameters = {
  viewMode: "docs",
  previewTabs: {
    canvas: { hidden: true },
  },
};

export const Text = () => (
  <>
    <Button variant="text">Default</Button>
    <Button variant="text" color="primary">
      Primary
    </Button>
    <Button variant="text" disabled>
      Disabled
    </Button>
  </>
);
Text.parameters = {
  viewMode: "docs",
  previewTabs: {
    canvas: { hidden: true },
  },
};
