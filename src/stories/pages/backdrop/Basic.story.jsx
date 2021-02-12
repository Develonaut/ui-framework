import React, { useState } from "react";
import { Backdrop, Button, CircularProgress } from "lib";

import "./story.scss";

export const Basic = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen(!open);

  return (
    <div className="demo">
      <Button color="primary" onClick={handleToggle}>
        Show Backdrop
      </Button>
      <Backdrop onClick={handleClose} open={open}>
        <CircularProgress size={60} />
      </Backdrop>
    </div>
  );
};
