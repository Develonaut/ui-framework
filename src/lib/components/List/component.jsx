import React, { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { ListItem } from "../ListItem";
import { ListSubheader } from "../ListSubheader";

import "./component.scss";

export const List = forwardRef(
  (
    { children, className, dense = false, disablePadding = false, ...other },
    ref
  ) => {
    const subheader = useMemo(
      () =>
        React.Children.toArray(children).filter(
          (child) => child.type === ListSubheader
        ),
      [children]
    );
    const listItems = useMemo(
      () =>
        React.Children.toArray(children)
          .filter((child) => child.type === ListItem)
          .map((child) =>
            child.type === ListItem
              ? React.cloneElement(child, { dense })
              : child
          ),
      [children, dense]
    );

    return (
      <ul
        className={clsx(
          "minitab-ui-list",
          {
            "minitab-ui-list-dense": dense,
            "minitab-ui-list-padding": !disablePadding,
            "minitab-ui-list-has-subheader": subheader.length,
          },
          className
        )}
        ref={ref}
        {...other}
      >
        {subheader}
        {listItems}
      </ul>
    );
  }
);

List.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   */
  dense: PropTypes.bool,
  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: PropTypes.bool,
};
