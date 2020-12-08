import React from "react";
import PropTypes from "prop-types";

import "./component.scss";

export const ThemeProvider = ({ children }) => {
  return <div className="minitab-ui-theme-provider">{children}</div>;
};

ThemeProvider.propTypes = {
  /**
   * The children of the Theme.
   */
  children: PropTypes.node,
};
