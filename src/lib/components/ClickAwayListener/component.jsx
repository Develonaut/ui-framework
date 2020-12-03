import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDidMount } from "lib/hooks";

import "./component.css";

export const ClickAwayListener = ({ children, onClickAway }) => {
  const ref = useRef();

  useDidMount(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        console.log("in target");
        return;
      }

      console.log("click out");
      onClickAway(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });

  return (
    <div ref={ref} className="minitab-ui-click-away-listener">
      {children}
    </div>
  );
};

ClickAwayListener.propTypes = {
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
