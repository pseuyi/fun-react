import React from './lib/react.js';
import Button from './components/Button.js';
import Header from './components/Header.js';

const App = (
  <div>
    <Header title="hello world" />
    <Button handleClick={() => alert('clicked')} label="my button" />
    <marquee>do u like my app</marquee>
  </div>
);

export default App;
