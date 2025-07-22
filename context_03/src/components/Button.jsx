import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


function Button() {
    const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button  onClick={toggleTheme} className={`headerrrr ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}>
      Toggle Theme
    </button>
  );
}

export default Button;
