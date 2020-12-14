import { TextField } from "lib";
import { defaultDocsParams } from "stories/core/config";

export const Basic = () => (
  <form className="root root-centered">
    <TextField placeholder="Basic" />
  </form>
);

Basic.parameters = {
  ...defaultDocsParams,
};
