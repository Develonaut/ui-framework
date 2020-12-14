import React from "react";
import { ArgsTable as StorybookArgsTable } from "@storybook/addon-docs/blocks";

export const ArgsTable = ({ Component, name }) => (
  <StorybookArgsTable of={Component} story={name} />
);
