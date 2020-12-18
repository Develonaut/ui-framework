import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Typography } from "../../Typography";

import "./component.scss";

export const DialogTitle = forwardRef(
  ({ children, className, ...other }, ref) => {
    return (
      <div
        className={clsx("minitab-ui-dialog-title", className)}
        ref={ref}
        {...other}
      >
        <Typography component="h2" variant="h6">
          {children}
        </Typography>
      </div>
    );
  }
);

DialogTitle.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
};
