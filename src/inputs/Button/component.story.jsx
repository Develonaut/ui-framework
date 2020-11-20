import React from "react";
import { Button } from "./component";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: { control: { type: "text" } },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
};
