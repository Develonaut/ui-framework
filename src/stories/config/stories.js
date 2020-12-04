import { Button, ClickAwayListener } from "lib";
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
}