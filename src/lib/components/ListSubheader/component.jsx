import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

export const ListSubheader = forwardRef(
  (
    {
      classes,
      className,
      color = "default",
      disableGutters = false,
      disableSticky = false,
      inset = false,
      ...other
    },
    ref
  ) => {
    return (
      <li
        className={clsx(
          "minitab-ui-list-subheader",
          {
            [`minitab-ui-list-subheader-color-${color}`]: color !== "default",
            "minitab-ui-list-subheader-inset": inset,
            "minitab-ui-list-subheader-sticky": !disableSticky,
            "minitab-ui-list-subheader-gutters": !disableGutters,
          },
          className
        )}
        ref={ref}
        {...other}
      />
    );
  }
);

ListSubheader.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "primary", "inherit"]),
  /**
   * If `true`, the List Subheader will not have gutters.
   */
  disableGutters: PropTypes.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   */
  disableSticky: PropTypes.bool,
  /**
   * If `true`, the List Subheader will be indented.
   */
  inset: PropTypes.bool,
};
