import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "lib";

import "./story.scss";

export const Sizes = () => {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("sm");
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMaxWidthChange = ({ target: { value } }) =>
    setMaxWidth(value === "false" ? false : value);
  const handleFullWidthChange = (event) => setFullWidth(event.target.checked);

  return (
    <>
      <Button color="primary" onClick={handleClickOpen}>
        Open Sizes Dialog
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        className="demo"
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Multiple Sizes</DialogTitle>
        <DialogContent dividers>
          <form>
            <div className="form-control row">
              <input
                id="full-width"
                type="checkbox"
                checked={fullWidth}
                onChange={handleFullWidthChange}
              />
              <label htmlFor="full-width">Full Width</label>
            </div>
            <div className="form-control column">
              <label htmlFor="max-width">Max Width</label>
              <select
                id="max-width"
                onChange={handleMaxWidthChange}
                autoFocus
                value={maxWidth}
              >
                <option value={false}>false</option>
                <option value="xs">xs</option>
                <option value="sm">sm</option>
                <option value="md">md</option>
                <option value="lg">lg</option>
                <option value="xl">xl</option>
              </select>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
