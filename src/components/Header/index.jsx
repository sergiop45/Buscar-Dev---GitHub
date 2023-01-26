import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './header.css';
import { useTheme } from '../../contexts/themeContext';

const Header = () => {

  const { theme, changeTheme } = useTheme();

  return (
    <header>

        <h1>Buscar Dev</h1>

        <button onClick={changeTheme}>

            <span>{theme === 'dark' ? 'light' : 'dark'}</span>
            
            { theme === 'dark' ?
            (
              <FaSun size={16} color='var(--gray)' />
            ) 
            : 
            (
              <FaMoon size={16} color='var(--gray)' />
            )
            }

        </button>

    </header>
  )
}

export default Header