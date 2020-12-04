import { Button, ClickAwayListener, TextField } from "lib";
import { PATHS } from "./paths";

export const STORIES = {
  BUTTON: {
    title: PATHS.BUTTON,
    path: PATHS.BUTTON,
    Component: Button,
    componentName: "Button",
  },
  CLICK_AWAY_LISTENER: {
    title: PATHS.CLICK_AWAY_LISTENER,
    path: PATHS.CLICK_AWAY_LISTENER,
    Component: ClickAwayListener,
    componentName: "ClickAwayListener",
  },
  TEXT_FIELD: {
    title: PATHS.TEXT_FIELD,
    path: PATHS.TEXT_FIELD,
    Component: TextField,
    componentName: "TextField"
  }
}