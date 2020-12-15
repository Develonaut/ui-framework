import React from "react";
import { Backdrop } from "lib";
import { getDefaultParams } from "stories/core/config";

export const API = (args) => <Backdrop {...args} />;

API.parameters = getDefaultParams();

API.args = {};
