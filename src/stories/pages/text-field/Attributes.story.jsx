import React from "react";
import { TextField } from "lib";
import { defaultDocsParams } from "stories/core/config";

export const Attributes = () => (
  <form className="root root-centered">
    <TextField placeholder="Basic" />
    <TextField placeholder="Disabled" label="Disabled" disabled />
    <TextField label="Number" placeholder="22" type="number" />
    <TextField
      label="Read Only"
      defaultValue="Hello World"
      readOnly
      helperText="I'm read only"
    />
    <TextField
      label="Default Value"
      defaultValue="Hello World"
      placeholder="Hi!"
    />
    <TextField label="Password" type="password" />
  </form>
);

Attributes.parameters = {
  ...defaultDocsParams,
};
