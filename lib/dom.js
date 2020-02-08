/*
let hooks = [];
let idx = 0;

export function useState(initialValue) {
  console.log('useState called');
  let state = hooks[idx] || initialValue;
  let _idx = idx;

  function setState(newValue) {
    hooks[_idx] = newValue;
    render();
  }

  idx++;

  return [state, setState];
}

export function useEffect(cb, deps) {
  const prevDeps = hooks[idx];
  let hasChanged = true;
  if (prevDeps) {
    hasChanged = deps.some((d, idx) => !Object.is(deps, prevDeps[idx]));
  }
  if (hasChanged) cb();
}

const useRef = initialValue => {
  if (!hooks[idx]) hooks[idx] = Object.seal({current: initialValue});
  return hooks[idx];
};

*/

const renderElement = element => {
  const {tag, props = {}, children} = element;

  // TODO
  if (typeof tag === 'function') {
    return renderElement(type(props));
  }

  if (typeof tag === 'string') {
    const domEl = document.createElement(tag);

    // iterate over children array and convert them to elements as well
    children.forEach(child => {
      // for inner text
      if (typeof child === 'string') {
        const textNode = document.createTextNode(child);
        domEl.appendChild(textNode);
      } else {
        // if the child is not a string, recursively parse the subtree and append to parent
        const domNode = renderElement(child);
        domEl.appendChild(domNode);
      }
    });

    //loop over props
    //    for (let key in props) {
    //      if (props.hasOwnProperty(key)) {
    //        const x = props[key];
    //      }
    //    }


    // attach props that are event handlers
    Object.keys(props || {}).forEach(key => {
      if (key.startsWith('on')) {
        domEl.addEventListener(key.substring(2).toLowerCase(), props[key]);
      }
    });

    return domEl;
  }
};

let _cachedApp = null;
let _element = null;
let _container = null;

const render = (element = _element, container = _container) => {
  const app = renderElement(element);

  _element = element;
  _container = container;

  // if app has been rendered before...replace with new app

  // TODO: find diff betwen cachedApp and app

  _cachedApp
    ? container.replaceChild(app, _cachedApp)
    : container.appendChild(app);

  // update cachedApp
  _cachedApp = app;
};

const ReactDOM = {
  render,
};

export default ReactDOM;
