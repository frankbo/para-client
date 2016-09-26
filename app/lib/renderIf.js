export default (shouldRender, element) => {
  if (shouldRender) {
    return element;
  } else {
    return null;
  }
};
