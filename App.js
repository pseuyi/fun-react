import {createElement as e} from './lib/react.js';
import Header from './components/Header.js';

const App = e(
  'div',
  null,
  e(Header, {title: 'hello world'}, ''),
  e('button', null, 'button'),
  e('marquee', null, 'do u like my app'),
);

export default App;

/*
const FnApp = () => {
  return (
    <div>
      <h1></h1>
      <button></button>
      <marquee></marquee>
    </div>
  );
};
*/
