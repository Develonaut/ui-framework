import {
  Story as StorybookStory,
  Canvas,
  SourceState,
} from "@storybook/addon-docs/blocks";
import { useCallback } from "react";

const defaultParameters = {
  layout: "centered",
};

const defaultCanvasProps = {
  isExpanded: true,
  withSource: SourceState.OPEN,
};

export const Story = ({
  children,
  disableCanvas = false,
  name,
  args = {},
  parameters = {},
  canvasProps = {},
}) => {
  const withCanvas = useCallback(
    (children) =>
      !disableCanvas ? (
        <Canvas
          {...{
            ...defaultCanvasProps,
            ...canvasProps,
          }}
        >
          {children}
        </Canvas>
      ) : (
        children
      ),
    [disableCanvas, canvasProps]
  );

  return withCanvas(
    <StorybookStory
      name={name}
      parameters={{
        ...defaultParameters,
        ...parameters,
      }}
      args={args}
    >
      {children}
    </StorybookStory>,
    canvasProps
  );
};
