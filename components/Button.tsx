import React from '../lib/react.js';

const Button = ({label, handleClick}) => {
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
