import { render, renderElement } from './dom-render.js';

const App = {
  type: 'div',
  props: {},
  children: [
    {type: 'h1', props: {}, children: ['header']},
    {type: 'button', props: {}, children: ['button']},
  ],
};

console.log('App: ', renderElement(App));
render(App, document.getElementById('root'));
