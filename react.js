//can take multiple child args
export function createElement(type, props, ...children) {
  const el = {type, props, children};

  Object.freeze(el);
  Object.freeze(el.props);

  return el;
}

