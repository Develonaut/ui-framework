import { Source } from "@storybook/addon-docs/blocks";
import { getPackageName } from "stories/core/utils";

export const ImportSnippet = ({ componentName }) => (
  <Source
    dark
    language="jsx"
    code={`
import ${componentName} from '${getPackageName()}/${componentName}';
// or
import { ${componentName} } from '${getPackageName()}';
    `}
  />
);
