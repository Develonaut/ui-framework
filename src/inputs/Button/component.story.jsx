import React from "react";
import { Button } from "./component";


const ButtonStory = {
  title: "Inputs/Button",
  component: Button,
  argTypes: {
    color: {
      control: { type: "select", options: ["default", "primary", "secondary"] },
    },
  },
};

export default ButtonStory;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};
