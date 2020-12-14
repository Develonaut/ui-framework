import { ownerDocument } from "./ownerDocument";

export const ownerWindow = (node) => {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
};
