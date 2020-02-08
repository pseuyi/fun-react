import {createElement as e} from './lib/react.js';

const header = ({title}) => e('h1', null, `name of app: ${title}`);

const App = e(
  'div',
  null,
  e(header, {title: 'hello world'}, ''),
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
