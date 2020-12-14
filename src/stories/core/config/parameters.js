export const defaultDocsParams = {
  docs: {
    source: {
      type: "dynamic",
    },
  },
};

export const getDefaultParams = (params) => ({
  ...defaultDocsParams,
  ...params,
});
