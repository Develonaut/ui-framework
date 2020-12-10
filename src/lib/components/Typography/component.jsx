import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

const variantMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p",
};

export const Typography = ({
  align = "inherit",
  className,
  children,
  component,
  color = "initial",
  display = "initial",
  gutterBottom = false,
  noWrap = false,
  paragraph,
  variant = "body1",
  variantMapping = variantMap,
  value,
  ...rest
}) => {
  const as = component || (paragraph ? "p" : variantMap[variant]) || "span";

  return React.createElement(as, {
    children: value || children,
    className: clsx(
      `minitab-ui-typography minitab-ui-typography-${variant} minitab-ui-typography-display-${display} minitab-ui-typography-align-${align}`,
      {
        "minitab-ui-typography-no-wrap": noWrap,
        "minitab-ui-typography-gutter-bottom": gutterBottom,
      },
      className
    ),
    ...rest,
  });
};

Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: PropTypes.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
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
   * Controls the display type
   */
  display: PropTypes.oneOf(["block", "initial", "inline"]),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    "body1",
    "body2",
    "button",
    "caption",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "inherit",
    "overline",
    "subtitle1",
    "subtitle2",
  ]),
};
