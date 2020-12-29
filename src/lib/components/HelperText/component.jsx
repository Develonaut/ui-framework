import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import "./component.scss";

export const HelperText = ({ error, children = "" }) => (
  <p
    className={clsx("minitab-ui-helper-text", {
      "minitab-ui-helper-text-error": error,
    })}
  >
    {children}
  </p>
);

HelperText.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: PropTypes.bool,
};
