import { createElement, forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./component.scss";

export const ListItem = forwardRef(
  (
    {
      alignItems = "center",
      button = false,
      children,
      className,
      as,
      dense = false,
      disabled = false,
      disableGutters = false,
      divider = false,
      selected = false,
      ...other
    },
    ref
  ) => {
    const el = button ? "div" : "li";
    return createElement(el, {
      ref,
      children,
      className: clsx(
        "minitab-ui-list-item",
        {
          "minitab-ui-list-item-dense": dense,
          "minitab-ui-list-item-gutters": !disableGutters,
          "minitab-ui-list-item-divider": divider,
          "minitab-ui-list-item-disabled": disabled,
          "minitab-ui-list-item-button": button,
          "minitab-ui-list-item-align-flex-start": alignItems === "flex-start",
          "minitab-ui-list-item-selected": selected,
        },
        className
      ),
      disabled,
      ...other,
    });
  }
);

ListItem.propTypes = {
  /**
   * Defines the `align-items` style property.
   */
  alignItems: PropTypes.oneOf(["flex-start", "center"]),
  /**
   * If `true`, the list item will be a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   */
  button: PropTypes.bool,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  as: PropTypes.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: PropTypes.bool,
  /**
   * If `true`, the list item will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: PropTypes.bool,
  /**
   * Use to apply selected styling.
   */
  selected: PropTypes.bool,
};
