export const ownerDocument = (node) => {
  return (node && node.ownerDocument) || document;
};
