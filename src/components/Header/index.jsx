import React from 'react';
import { FaSun } from 'react-icons/fa';
import './header.css';

const Header = () => {
  return (
    <header>

        <h1>Buscar Dev</h1>

        <button>

            <span>Dark</span>
            <FaSun size={16} color='var(--gray)' />

        </button>

    </header>
  )
}

export default Header