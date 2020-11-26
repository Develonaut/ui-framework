import { Anchor } from "@storybook/addon-docs/blocks";

export const StoryAnchor = ({ name = "", path = "" }) => (
  <Anchor
    storyId={`${path.replace("/", "-").toLowerCase()}--${name.toLowerCase()}`}
  />
);
