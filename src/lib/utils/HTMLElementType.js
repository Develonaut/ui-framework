export const HTMLElementType = (
  props,
  propName,
  componentName,
  location,
  propFullName
) => {
  const propValue = props[propName];
  const safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  if (propValue && propValue.nodeType !== 1) {
    return new Error(
      `Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` +
        `Expected an HTMLElement.`
    );
  }

  return null;
};
