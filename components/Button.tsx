import React from '../lib/react.js';

interface ButtonProps {
  label: string;
  handleClick: () => {};
}

const Button = ({label, handleClick}: ButtonProps) => {
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
