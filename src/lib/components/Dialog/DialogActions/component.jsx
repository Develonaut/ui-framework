import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

export const DialogActions = forwardRef(
  ({ disableSpacing = false, classes, className, ...other }, ref) => {
    return (
      <div
        className={clsx("minitab-ui-dialog-actions", className, {
          "minitab-ui-dialog-actions": !disableSpacing
        })}
        ref={ref}
        {...other}
      />
    );
  }
);

DialogActions.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool,
};
