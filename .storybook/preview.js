export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // Order of the toolbar tabs
  previewTabs: {
    "storybook/docs/panel": { index: 0 },
    canvas: { index: 1 },
  },
  options: {
    // Sort the stories in the sidebar
    storySort: {
      order: ["Getting Started", "Inputs", "Utils"],
    },
  },
  // Sets the default tab to "Docs" when navigating between stories.
  viewMode: 'docs',
};
