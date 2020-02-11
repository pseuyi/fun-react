import React from '../lib/react.js';

interface HeaderProps{
  title: string,
}

const Header = ({title}: HeaderProps) => <h1>name of app: {title}</h1>

export default Header;
