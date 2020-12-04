import { Anchor } from "@storybook/addon-docs/blocks";

export const StoryAnchor = ({ name = "", path = "" }) => (
  <Anchor
    storyId={`${path.replaceAll("/", "-").toLowerCase()}--${name.replaceAll(" ", "-").toLowerCase()}`}
  />
);
