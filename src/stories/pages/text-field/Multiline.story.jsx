import React from "react";
import { TextField } from "lib";
import { defaultDocsParams } from "stories/core/config";

export const Multiline = () => (
  <form className="root">
    <TextField placeholder="Basic Multiline" multiline />
    <TextField
      multiline
      label="Multiline"
      defaultValue="Hello World"
      rows={4}
    />
  </form>
);

Multiline.parameters = {
  ...defaultDocsParams,
};
