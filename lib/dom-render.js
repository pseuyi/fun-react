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

export function useRef(initialValue) {
  if (!hooks[idx]) hooks[idx] = Object.seal({current: initialValue});
  return hooks[idx];
}

export function renderElement(element) {
  const {type, props = {}, children} = element;

  if (typeof type === 'function') {
    return renderElement(type(props));
  }

  if (typeof type === 'string') {
    const domEl = document.createElement(type);

    // loop over children
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

    //loop over props
    //    for (let key in props) {
    //      if (props.hasOwnProperty(key)) {
    //        const x = props[key];
    //      }
    //    }

    Object.keys(props || {}).forEach(key => {
      if (key.startsWith('on')) {
        domEl.addEventListener(key.substring(2).toLowerCase(), props[key]);
      }
    });

    return domEl;
  }
}

let _currentApp = null;
let _element = null;
let _container = null;

export function render(element = _element, container = _container) {
  const app = renderElement(element);

  _element = element;
  _container = container;

  // if app has been rendered before...use cached app otherwise replace
  _currentApp
    ? container.replaceChild(app, _currentApp)
    : container.appendChild(app);

  _currentApp = app;

  idx = 0;
}

const ReactDOM = {
  render,
  renderElement,
};

export default ReactDOM;
