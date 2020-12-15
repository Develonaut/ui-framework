import React from "react";
import { Surface } from "lib";
import { getDefaultParams } from "stories/core/config";

export const API = (args) => <Surface {...args} />;

API.parameters = getDefaultParams();

API.args = {};
