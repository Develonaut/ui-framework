import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useDidMount } from "lib/hooks";

export const ClickAwayListener = ({ children, onClickAway }) => {
  const ref = useRef();

  useDidMount(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements.
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
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
   * The wrapped element.
   */
  children: PropTypes.node,
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClick: PropTypes.func,
};
