import {createElement as e} from './react.js';

import {render, renderElement} from './dom-render.js';

//const App = {
//  type: 'div',
//  props: {},
//  children: [
//    {type: 'h1', props: {}, children: ['header']},
//    {type: 'button', props: {}, children: ['button']},
//    {type: 'marquee', props: {}, children: ['do u like my app']},
//  ],
//};

const App = e(
  'div',
  null,
  e('h1', null, 'header'),
  e('button', null, 'button'),
  e('marquee', null, 'do u like my app'),
  Counter(),
);

console.log('App: ', renderElement(App));
render(App, document.getElementById('root'));

function Counter() {
  return e('h2', null, 'counter: ', e(Button, {label: '+'}), Button({label: '-'}));
}
function Button({label}) {
  return e('button', null, label);
}
