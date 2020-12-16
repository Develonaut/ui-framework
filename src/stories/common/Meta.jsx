import { Meta as StorybookMeta } from "@storybook/addon-docs/blocks";
import { useEffect } from "react";
import { paramCase } from "change-case";

const defaultBodyClasses = "sb-show-main sb-main-fullscreen"

export const Meta = ({ title, component, anchor = true }) => {
  useEffect(() => {
      const storyBody = document.querySelector("body.sb-show-main");
      storyBody.className = `${defaultBodyClasses} story-${paramCase(title)}`
  }, [title]);

  return (
    <StorybookMeta
      title={title}
      component={component}
      anchor={anchor}
    />
  );
};
