import React, { useState } from "react";
import { Backdrop, Button, Typography } from "lib";

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
        <Typography className="loading" variant="h4">Loading</Typography>
      </Backdrop>
    </div>
  );
};
