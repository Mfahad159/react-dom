import React, { useContext } from 'react';
import Button from './Button';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`headerrrr ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h1>My Theme App</h1>
      <Button />
    </header>
  );
}

export default Header;
