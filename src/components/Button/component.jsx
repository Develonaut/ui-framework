import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

export const Button = ({
  color = "default",
  variant = "contained",
  size = "medium",
  children = "",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        `minitab-ui-button minitab-ui-button-${color} minitab-ui-button-${size} minitab-ui-button-${variant}`,
        {
          "minitab-ui-button-disabled": disabled,
        }
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   *
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * The color of the button.
   */
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
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
