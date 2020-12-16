import { Meta as StorybookMeta } from "@storybook/addon-docs/blocks";
import { useEffect } from "react";
import { paramCase } from "change-case";

export const Meta = ({ title, component, anchor = true }) => {
  useEffect(() => {
      const storyBody = document.querySelector("body.sb-show-main");
      storyBody.classList.add(paramCase(`story-${title}}`));
  }, [title]);

  return (
    <StorybookMeta
      title={title}
      component={component}
      anchor={anchor}
    />
  );
};
