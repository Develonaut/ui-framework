import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import "./component.scss";
import clsx from "clsx";

export const DialogContent = forwardRef(
  ({ classes, className, dividers = false, ...other }, ref) => {
    return (
      <div
        className={clsx("minitab-ui-dialog-content", className, {
          "minitab-ui-dialog-content-dividers": dividers,
        })}
        ref={ref}
        {...other}
      />
    );
  }
);

DialogContent.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Display the top and bottom dividers.
   */
  dividers: PropTypes.bool,
};
