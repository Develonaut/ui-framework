import {
  Story as StorybookStory,
  Canvas,
  SourceState,
} from "@storybook/addon-docs/blocks";
import { useCallback } from "react";

export const Story = ({
  children,
  disableCanvas = false,
  name,
  args = {},
  layout = "centered",
  expanded = false,
  disableSource = false,
  parameters = {},
  canvasProps = {},
}) => {
  const withCanvas = useCallback(
    (children) =>
      !disableCanvas ? (
        <Canvas
          isExpanded={expanded}
          withSource={
            disableSource
              ? SourceState.NONE
              : expanded
              ? SourceState.OPEN
              : SourceState.CLOSED
          }
        >
          {children}
        </Canvas>
      ) : (
        children
      ),
    [disableCanvas, expanded, disableSource]
  );

  return withCanvas(
    <StorybookStory
      name={name}
      parameters={{
        layout,
        ...parameters,
      }}
      args={args}
    >
      {children}
    </StorybookStory>,
    canvasProps
  );
};
