import { Meta as StorybookMeta } from "@storybook/addon-docs/blocks";

export const Meta = ({ title, Component, anchor = true }) => (
  <StorybookMeta title={title} component={Component} anchor={anchor} />
);
