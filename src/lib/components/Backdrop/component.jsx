import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

export const Backdrop = forwardRef(
  ({ invisible = false, open, className, ...other }, ref) => {
    return open ? (
      <div
        className={clsx("minitab-ui-backdrop", className, {
          "minitab-ui-backdrop": invisible,
        })}
        aria-hidden
        ref={ref}
        {...other}
      />
    ) : null;
  }
);

Backdrop.propTypes = {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: PropTypes.bool,
  /**
   * If `true`, the backdrop is open.
   */
  open: PropTypes.bool.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
};
