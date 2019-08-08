export function renderElement(element) {
  const {type, props, children} = element;

  const domEl = document.createElement(type);

  children.forEach(child => {
    if (typeof child === 'string') {
      const textNode = document.createTextNode(child);
      domEl.appendChild(textNode);
    } else {
      // if the child is not a string, recursively parse the subtree and append to parent
      const domNode = renderElement(child);
      domEl.appendChild(domNode);
    }
  });

  return domEl;
}

export function render(element, container) {
  const app = renderElement(element);
  container.appendChild(app);
}
