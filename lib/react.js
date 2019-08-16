//import dispatcher from './dispatcher';

//can take multiple child args
export function createElement(type, props, ...children) {
  const el = {type, props, children};

  Object.freeze(el);
  Object.freeze(el.props);

  return el;
}

export function useState(initialValue) {
  let value = initialValue;

  return [
    value,
    () => {
      value = value;
    },
  ];
}
// export imported dispatcher fns
