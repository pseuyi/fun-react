//import dispatcher from './dispatcher';

// TODO: what are children
// can take multiple child args
export const createElement = (type, props, ...children) => {
  const el = {type, props, children: [].concat(...children)};

  Object.freeze(el);
  Object.freeze(el.props);

  return el;
};

/*
export const useState = (initialValue) => {
  let value = initialValue;

  return [
    value,
    () => {
      value = value;
    },
  ];
}
*/

// export imported dispatcher fns

const React = { createElement }

export default React
