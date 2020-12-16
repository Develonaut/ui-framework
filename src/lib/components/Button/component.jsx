import { createElement } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

export const Button = ({
  color = "default",
  variant = "contained",
  size = "medium",
  children,
  onClick,
  disabled = false,
  href = undefined,
  as = "button",
}) => {
  const el = href ? "a" : as;
  return createElement(el, {
    ...(href ? { href } : {}),
    onClick,
    children,
    disabled,
    className: clsx(
      `minitab-ui-button minitab-ui-button-${color} minitab-ui-button-${size} minitab-ui-button-${variant}`,
      {
        "minitab-ui-button-link": href,
        "minitab-ui-button-disabled": disabled,
      }
    ),
  });
};

Button.propTypes = {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  as: PropTypes.elementType,
  /**
   * The content of the button.
   */
  children: PropTypes.node,
  /**
   * The color of the button.
   */
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * The button variant.
   */
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  /**
   * Ths size of the button.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
