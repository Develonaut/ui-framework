import React, { useState } from "react";
import { ClickAwayListener, Button } from "lib";

export const API = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);
  const handleClickAway = () => setOpen(false);
  return (
    <div className="root">
      <Button onClick={handleClick}>Click Me</Button>
      <ClickAwayListener onClickAway={handleClickAway}>
        {open ? (
          <div className="popup">{`
            Click me, I will stay visible 
            until you click outside.
        `}</div>
        ) : null}
      </ClickAwayListener>
    </div>
  );
};
