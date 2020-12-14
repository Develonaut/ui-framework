import React from "react";
import { TextField } from "lib";

export const API = (args) => <TextField {...args} />;

API.args = {
  placeholder: "Enter some text",
  label: "Playground Input",
  helperText: "I am helper text",
};
