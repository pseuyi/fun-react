import {createElement as e} from './lib/react.js';
import {renderElement, render, useState, useEffect} from './lib/dom-render.js';

//const App = {
//  type: 'div',
//  props: {},
//  children: [
//    {type: 'h1', props: {}, children: ['header']},
//    {type: 'button', props: {}, children: ['button']},
//    {type: 'marquee', props: {}, children: ['do u like my app']},
//  ],
//};

// console.log('App: ', renderElement(App));

// components
function Counter() {
  const [value, setValue] = useState(25);

	//  useEffect(() => {
	//  }, [value]);

  const updateCounter = label => {

    if (label === '+') setValue(value + 1);
    if (label === '-') setValue(value - 1);

    render();
  };

  return e(
    'h2',
    null,
    'counter: ' + value,
    e(Button, {label: '+', handleClick: updateCounter}),
    e(Button, {label: '-', handleClick: updateCounter}),
  );
}

function Button({label, handleClick}) {
  return e('button', {onclick: () => handleClick(label)}, label);
}

const App = e(
  'div',
  null,
  e('h1', null, 'header'),
  e('button', null, 'button'),
  e('marquee', null, 'do u like my app'),
  e(Counter, null),
);

//() => alert('t(*__*t)')

render(App, document.getElementById('root'));

export default App;
