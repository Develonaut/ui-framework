import React from "react";
import { Button } from "lib";
import { getDefaultParams } from "stories/core/config";

export const API = (args) => <Button {...args} />;

API.parameters = getDefaultParams();

API.args = {
  children: "Default",
};
