import React, { forwardRef, createElement } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

export const SvgIcon = forwardRef((props, ref) => {
  const {
    children,
    className,
    color = "inherit",
    as = "svg",
    size = "medium",
    htmlColor,
    titleAccess,
    viewBox = "0 0 24 24",
    ...other
  } = props;

  return createElement(as, {
    className: clsx(
      `mtb-svg-icon mtb-svg-icon-color-${color} mtb-svg-icon-size-${size}`,
      className
    ),
    focusable: "false",
    viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? "img" : undefined,
    ref,
    ...other,
    children: [
      children,
      ...(titleAccess ? [<title>{titleAccess}</title>] : [undefined]),
    ],
  });
});

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: PropTypes.oneOf([
    "action",
    "disabled",
    "error",
    "inherit",
    "primary",
    "secondary",
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  as: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  size: PropTypes.oneOf(["inherit", "small", "medium", "large"]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: PropTypes.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: PropTypes.string,
};
