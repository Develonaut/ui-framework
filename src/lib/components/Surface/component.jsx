import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export const Surface = React.forwardRef(
  (
    {
      classes,
      className,
      Component = "div",
      square = false,
      elevation = 1,
      variant = "elevation",
      ...other
    },
    ref
  ) => {
    return (
      <Component
        className={clsx(
          "minitab-ui-surface",
          `minitab-ui-surface-${variant}`,
          {
            "minitab-ui-surface-rounded": !square,
            [`minitab-ui-surface-${elevation}`]: variant === "elevation",
          },
          className
        )}
        ref={ref}
        {...other}
      />
    );
  }
);

Surface.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
  ]),
  /**
   * If `true`, rounded corners are disabled.
   */
  square: PropTypes.bool,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["elevation", "outlined"]),
};
